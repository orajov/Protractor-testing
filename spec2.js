describe("Protractor tutorial",function () {

    it('Open Angular website', function () {

        browser.waitForAngularEnabled(false);
        browser.get('http://poradfilm.cekuj.net/form.html');

        element(by.id("gobutton")).click().then(function () {
            browser.sleep(5000);

        });

    });

});