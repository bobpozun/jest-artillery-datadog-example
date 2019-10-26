import {AuthService} from "../lib/utils/AuthService";
const env = process.env;

describe('Auth API Test Suite', () => {
    beforeEach(async () => {
    });

    test.each`
    name | username | password | expectedCode | reason
    ${"Auth Create token happy path"} | ${env.AUTH_USERNAME} | , ${env.AUTH_PASSWORD} | ${200} | ${undefined}
    ${"Auth Create token bad username"} | ${"badusername"} | , ${env.AUTH_PASSWORD} | ${200} | ${"Bad credentials"}
    ${"Auth Create token bad passowrd"} | ${env.AUTH_USERNAME} | , ${"badpassword"} | ${200} | ${"Bad credentials"}
    `('$name', async ({username, password, expectedCode, reason}) => {
        let authApiResponse = await AuthService.auth(username, password);
        expect(authApiResponse.status).toBe(expectedCode);
        expect(authApiResponse.data.reason).toBe(reason);
        if (reason == undefined) {
            expect(authApiResponse.data.token).not.toBeNull();
        }
    });
});
