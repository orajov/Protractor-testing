describe("Chain locators demo",function () {

    it('Open Angular website', function () {


        browser.get('http://juliemr.github.io/protractor-demo/');
        //repeater, chain locators and css for indetical tags

        element(by.model("first")).sendKeys(1);
        element(by.model("second")).sendKeys(5);

        element(by.id("gobutton")).click();

        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function (text) {

            console.log(text);

        })



    });

});