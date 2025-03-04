import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    
    timeout: 60000,
    retries: 0,
    testDir: "tests/e2e",
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 15000, //timeout before timeout
        ignoreHTTPSErrors: true,
        video: "retain-on-failure", //saves videos of failed tests
        screenshot: 'only-on-failure',
    },
    projects: [
        {
            name: "Chromium",
            use: { browserName: 'chromium' },
        },
        {
            name: "FireFox",
            use: { browserName: 'firefox' },
        },
        {
            name: "Webkit",
            use: {browserName: 'webkit'},
        }
    ],
}

export default config