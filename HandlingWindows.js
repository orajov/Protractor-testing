describe("Actions",function () {

    it('Open Angular website', function () {

        browser.waitForAngularEnabled(false);   // non angular web
        browser.get("http://bitcoinpoint.cz");
        browser.manage().window().maximize();

        const sleep = browser.sleep;
        const actions = browser.actions;
        const el = element;

        el(by.css('a[href="/podminky-a-gdpr"]'))
            .click()
            .then(function () {
                browser.getAllWindowHandles()
                    .then(function (handles) {

                        browser.switchTo().window(handles[0])

                })
                sleep(5000)
            })


    })
})