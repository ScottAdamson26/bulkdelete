import React, { useState } from 'react';

export default function FormPage() {
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
      event.preventDefault();
      setStatus('loading');
      const apiKey = event.target['api-key'].value;
      const collectionId = event.target['collection-id'].value;

      try {
          const response = await fetch('/api/delete', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ apiKey, collectionId }),
          });

          const data = await response.json();
          console.log("Response received:", data);

          if (data.success) {
              setStatus('success');
          } else {
              throw new Error(data.message || 'Unknown error occurred');
          }
      } catch (error) {
          console.error('Request failed:', error);
          setStatus('error');
          setErrorMessage(error.message || 'Failed to send request');
      }
  };

    return (
      <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="p-6 rounded-lg bg-white shadow-lg max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Enter Your Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="api-key" className="block text-gray-700 text-sm font-bold mb-2">
                Webflow API Key
              </label>
              <input type="text" id="api-key" name="api-key" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-6">
              <label htmlFor="collection-id" className="block text-gray-700 text-sm font-bold mb-2">
                Collection ID
              </label>
              <input type="text" id="collection-id" name="collection-id" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300" disabled={status === 'loading'}>
              {status === 'loading' ? 'Deleting...' : 'Submit'}
            </button>
            {status === 'success' && <div className="text-green-500 mt-2">Delete successful!</div>}
            {status === 'error' && <div className="text-red-500 mt-2">Error: {errorMessage}</div>}
          </form>
        </div>
      </main>
    );
}
