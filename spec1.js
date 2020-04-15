describe("Protractor tutorial",function () {

    it('Open Angular website', function () {

        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model("first")).sendKeys(1);
        element(by.model("second")).sendKeys(50);

        element(by.id("gobutton")).click();


        browser.sleep(9000);

    });

});