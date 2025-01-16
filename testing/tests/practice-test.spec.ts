import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/login')
})

test.describe('login to page', () => {
  test('should allow me to enter username', async ({ page }) => {
    const username = page.getByLabel('Username')
    await username.fill('practice')
    const password = page.getByLabel('Password')
    await password.fill('SuperSecretPassword!')
    await password.press('Enter')
    await expect(page).toHaveTitle(/Secure/)
  })
})
//  await expect(page).toHaveTitle(/Test Login Page/)
