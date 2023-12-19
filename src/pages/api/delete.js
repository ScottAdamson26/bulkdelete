import { spawn } from 'child_process';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` });
    }

    const { apiKey, collectionId } = req.body;

    try {
        console.log('Executing Python script...');
        
        // Spawn a child process to run the Python script
        const pythonProcess = spawn('python', ['webflowapi.py', apiKey, collectionId]);
        let scriptOutput = '';

        pythonProcess.stdout.on('data', (data) => {
            scriptOutput += data.toString();
        });

        pythonProcess.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });

        pythonProcess.on('close', (code) => {
            console.log(`Python script exited with code ${code}`);
            if (code === 0) {
                console.log('Python script executed successfully:', scriptOutput);
                res.status(200).json({ success: true, message: 'Script executed successfully', results: scriptOutput });
            } else {
                res.status(500).json({ success: false, message: 'Error executing Python script', error: scriptOutput });
            }
        });
    } catch (error) {
        console.error('Error executing Python script:', error);
        res.status(500).json({ success: false, message: 'Error executing Python script', error: error.message });
    }
}
