import { Page, Locator } from '@playwright/test';

export class LoginPage {
  private page: Page;
  private inputUsuario: Locator;
  private inputClave: Locator;
  private botonLogin: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputUsuario = page.getByPlaceholder('Username');
    this.inputClave = page.getByPlaceholder('Password');
    this.botonLogin = page.getByTestId('login-button');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(usuario: string, clave: string) {
    await this.inputUsuario.fill(usuario);
    await this.inputClave.fill(clave);
    await this.botonLogin.click();
  }
}