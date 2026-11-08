class HomePage {
    constructor(page) {
        this.page = page;
    }

    async acessarHome() {
        await this.page.goto('https://www.blazedemo.com/');
    }

    async acessarLogin() {
        await this.page.goto('https://www.blazedemo.com/login');
    }
}

module.exports = { HomePage };