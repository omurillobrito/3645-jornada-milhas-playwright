import { test, expect } from '@playwright/test';
import { spec } from 'node:test/reporters';

test('Logo da Pagina', async ({ page }) => {
  await page.goto('http://localhost:4200/home');
  const logo = page.getByRole('link', { name: 'Logo da aplicação Jornada' });

  await expect(logo).toBeVisible();
});

test('Botão de Login', async ({ page }) => {
  await page.goto('http://localhost:4200/home');
  const loginBotao= page.getByTestId('botao-login')

  await expect(loginBotao).toBeVisible();
});