const API_URL = 'http://localhost:1337';

//Returning the data from our mongo db to json
export async function listLogEntries() {
  const response = await fetch(`${API_URL}/api/logs`);
  return response.json();
}