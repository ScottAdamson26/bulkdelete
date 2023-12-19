import requests
import sys

api_token = sys.argv[1]
collection_id = sys.argv[2]

def get_authenticated_headers():
    return {
        'Authorization': f'Bearer {api_token}',
        'accept': 'application/json'
    }

def fetch_collection_items(collection_id, headers):
    print("Fetching collection items...")
    url = f'https://api.webflow.com/v2/collections/{collection_id}/items'
    try:
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        items = response.json()['items']
        print(f"Found {len(items)} items.")
        return items
    except Exception as e:
        print(f"Error fetching collection items: {e}")
        return None

def delete_collection_item(collection_id, item_id, headers):
    print(f"Deleting item {item_id}...")
    url = f'https://api.webflow.com/v2/collections/{collection_id}/items/{item_id}'
    try:
        response = requests.delete(url, headers=headers, timeout=10)
        response.raise_for_status()
        print(f"Deleted item {item_id}, status code: {response.status_code}")
        return response.status_code
    except Exception as e:
        print(f"Error deleting item {item_id}: {e}")
        return None

def main():
    headers = get_authenticated_headers()
    collection_items = fetch_collection_items(collection_id, headers)
    for item in collection_items:
        delete_collection_item(collection_id, item['id'], headers)
    
    # Single completion message
    print("Script completed successfully with deletion of", len(collection_items), "items.")

if __name__ == '__main__':
    main()