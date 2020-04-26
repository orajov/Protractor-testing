describe("Actions",function () {

    it('Open Angular website', function () {

        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/customer");

        const sleep = browser.sleep;
        const actions = browser.actions;
        const el = element;

        actions()
            .mouseMove(el(by.model("custId"))
                .sendKeys("Harry Potter"))
            .perform()
        el(by.css('button.btn-default'))
            .click()

        actions()
            .mouseMove(el(by.model("accountNo"))
                .sendKeys("1005"))
            .perform()
        el(by.buttonText('Deposit'))
            .click()

        actions()
            .mouseMove(el(by.model("amount"))
                .sendKeys("50000"))
            .perform()
        el(by.css("button.btn-default"))
            .click()
            .then(function () {
                sleep(1000)
            })

        el(by.buttonText('Transactions')).click()
            .then(function () {
                sleep(5000)
            })

    })
})