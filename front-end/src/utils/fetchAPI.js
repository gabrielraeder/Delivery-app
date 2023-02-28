const HOST = 'localhost';
const PORT = 3001;

export default async function fetchAPI(path, callback, options) {
  const response = await fetch(`http://${HOST}:${PORT}${path}`, options);
  const data = response.json();
  callback(data);
}
