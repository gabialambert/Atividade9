class LoginPage {
    constructor(page) {
        this.page = page;

        this.emailInput = page.getByLabel('E-Mail Address');
        this.passwordInput = page.getByLabel('Password');
        this.loginButton = page.getByRole('button', {
            name: 'Login'
        });

        this.mensagemErro = page.getByText('419 Page Expired', {
            exact: true
        });
    }

    async realizarLogin(email, senha) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(senha);
        await this.loginButton.click();
    }
}

module.exports = { LoginPage };