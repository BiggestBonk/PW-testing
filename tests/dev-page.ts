import { expect, type Locator, type Page } from '@playwright/test'

export class FungipediaPage {
  readonly page: Page
  readonly fungipediaHeader: Locator
  readonly fungipediaLink: Locator
  readonly mushLink: Locator
  readonly index: Locator

  constructor(page: Page) {
    this.page = page
    this.fungipediaLink = page.locator('button', { hasText: 'Fungipedia' })
    this.fungipediaHeader = page.locator('h1', {
      hasText: 'Welcome to Fungipedia',
    })
    this.index = page.locator('div.underline > button')
    this.mushLink = page.locator('button', {
      hasText: 'Hollow Snakehead',
    })
  }
  async goto() {
    await this.page.goto('https://my-celium.devacademy.nz/')
  }
  async fungipedia() {
    await this.fungipediaLink.first().click()
    await expect(this.fungipediaHeader).toBeVisible()
  }
  async mushroomEntry() {
    await this.fungipedia()
    await this.mushLink.click()
  }
}
