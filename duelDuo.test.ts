
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('draw button displays character choices', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(500)
    const myChoices = await driver.findElement(By.id('choices'))
    expect(myChoices).not.toBe('')
})

test('add to duo button diplays characters added', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(500)
    const myDuo = await driver.findElement(By.id('player-duo'))
    expect(myDuo).not.toBe('')
})