describe("Protractor tutorial",function () {

    it('Open Angular website', function () {

        browser.get('http://poradfilm.cekuj.net/form.html');
        browser.sleep(5000);
        element(by.id("gobutton")).click();

        browser.sleep(5000);

    });

});