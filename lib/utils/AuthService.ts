import {HttpService} from "./HttpService";
import {AuthRequest} from "../models/auth.request";
const env = process.env;
let headers = {'Content-Type': 'application/json'};

export class AuthService {
    public static auth(username = env.AUTH_USERNAME, password = env.AUTH_PASSWORD) {
        let request = JSON.stringify(new AuthRequest(username,password));
        return HttpService.httpPost(`${env.TEST_API_URL}/auth`, headers, request);
    }
}