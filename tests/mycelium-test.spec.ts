import { test, expect } from '@playwright/test'
import { FungipediaPage } from './dev-page'

test.skip('Fungipedia should contain an index', async ({ page }) => {
  const Fungipedia = new FungipediaPage(page)
  await Fungipedia.goto()
  await Fungipedia.fungipedia()
  await expect(Fungipedia.index).toHaveText([
    `Lover's redcap`,
    `Hollow Snakehead`,
    `Fool's Bolete`,
    `Cerulean Bonnet`,
    `Cumulo Puffball`,
    `Silly-kitty Bolete`,
  ])
})

test.skip('should show Fungipedia entry', async ({ page }) => {
  const Fungipedia = new FungipediaPage(page)
  await Fungipedia.goto()
  await Fungipedia.mushroomEntry()
  await expect(page.locator('paragraph')).toContainText(
    'Often spotted under the shade'
  )
})
