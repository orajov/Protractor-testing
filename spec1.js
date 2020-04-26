describe("Protractor tutorial",function () {

    it('Open Angular website', function () {

        //non angular web
        // browser.waitForAngularEnabled(false);
        browser.get('http://juliemr.github.io/protractor-demo/');

        element(by.model("first")).sendKeys(1);
        element(by.model("second")).sendKeys(50);

        element(by.id("gobutton")).click();

        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8");

        element(by.css("h2[class='ng-binding']")).getText().then(function (text) {

            console.log(text);

        })


    });

});