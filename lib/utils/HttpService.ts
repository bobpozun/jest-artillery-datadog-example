const axios = require('axios');
const httpClient = axios.create({
    maxContentLength: 100 * 1024 * 1024,
    timeout: 180 * 1000,
});

export class HttpService {
    public static httpPost(endpoint, headers, body) {
        return httpClient.post(endpoint, body, {headers: headers})
            .then((response) => { return response;})
            .catch((error) => {return error.response;});
    }

    public static httpDelete(endpoint, headers) {
        return httpClient.delete(endpoint, {headers: headers});
    }

    public static httpGet(endpoint, headers, queryParams) {
        return httpClient.get(endpoint, {headers: headers, params: queryParams});
    }
}