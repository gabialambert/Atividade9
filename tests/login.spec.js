const { test, expect } = require('@playwright/test');

const { HomePage } = require('../pages/HomePage');
const { LoginPage } = require('../pages/LoginPage');

// Massa de dados (DDT)
const dadosLogin = [
    {
        email: 'gabi@teste.com',
        senha: 'Teste123'
    }
];

test.describe('Teste de Login - BlazeDemo', () => {

    for (const dados of dadosLogin) {

        test(`Login deve apresentar 419 Page Expired - ${dados.email}`, async ({ page }) => {

            const homePage = new HomePage(page);
            const loginPage = new LoginPage(page);

            // Acessar a Home
            await homePage.acessarHome();

            // Acessar a página Login
            await homePage.acessarLogin();

            // Realizar login
            await loginPage.realizarLogin(
                dados.email,
                dados.senha
            );

            // Validar mensagem esperada
            await expect(loginPage.mensagemErro).toBeVisible();
        });
    }
});