import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/login')
})

test.describe('Login to page', () => {
  test('should allow me to enter username and password correctly', async ({
    page,
  }) => {
    const username = page.getByLabel('Username')
    await username.fill('practice')
    const password = page.getByLabel('Password')
    await password.fill('SuperSecretPassword!')
    await password.press('Enter')
    await expect(page).toHaveTitle(/Secure/)
  })
})

test.describe('Fail to login to the page', () => {
  test('should allow me to enter username and password incorrectly', async ({
    page,
  }) => {
    const username = page.getByLabel('Username')
    await username.fill('practise')
    const password = page.getByLabel('Password')
    await password.fill('SuperSpecialPassword!')
    const loginbutton = page.getByRole('button', { name: 'Login' })
    await loginbutton.click()
    const alert = page.getByText('Your password is invalid!')
    await expect(alert).toBeVisible()
  })
})
