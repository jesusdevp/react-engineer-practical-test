const baseUrl = 'https://api.jsonbin.io/v3'

export const fetchApi = (endpoint, method = 'GET', data) => {
    const url = `${baseUrl}/${endpoint}`


    if (method === "GET") {
        return fetch(url);
    } else {
        return fetch(url, {
            method,
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        });
    }
}; 