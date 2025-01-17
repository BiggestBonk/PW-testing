import { test, expect } from '@playwright/test'

test.skip('has title', async ({ page }) => {
  await page.goto('https://my-celium.devacademy.nz')
  await expect(page).toHaveTitle(/MyCelium/)
})

test.skip('can open Fungipedia', async ({ page }) => {
  await page.goto('https://my-celium.devacademy.nz')
  await page.getByRole('button', { name: 'Fungipedia', exact: true }).click()
  await expect(
    page.getByRole('paragraph', {
      name: 'Press Right Mouse Button to stop Planting',
    })
  ).toBeVisible()
})
