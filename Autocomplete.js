describe("Actions",function () {

    it('Open Angular website', function () {

        browser.waitForAngularEnabled(false);   // non angular web

        browser.get("https://angular-eshop.stackblitz.io/");

        const sleep = browser.sleep;
        const actions = browser.actions;
        const el = element;

        expect(el(by.buttonText("Add to Cart"))
            .count())
            .toEqual(5)

        el.all(by.buttonText("Add to Cart"))
            .get(3)
            .click()
            .then(function () {
                sleep(5000);
            })



    })
})