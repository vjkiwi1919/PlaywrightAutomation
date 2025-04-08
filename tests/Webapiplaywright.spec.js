const { test, expect, request } = require('@playwright/test');
const loginPayload = { userEmail: "vjkiwi@gmail.com", userPassword: "$1919Durgar" }


test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: loginPayload

        })
    expect(loginResponse.ok()).toBeTruthy();
    const loginResponsejson = await loginResponse.json();
    const token = loginResponsejson.token;
    console.log(token);

})
test.beforeEach(() => {

}) 