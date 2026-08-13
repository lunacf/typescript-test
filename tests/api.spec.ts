import { test, expect } from '@playwright/test';

test('get new user by id', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2', {
        headers: {
            'x-api-key': process.env.REQRES_API_KEY as string,
        },
    });
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.data.id).toBe(2);
    expect(body.data.email).toContain("@reqres.in");
});