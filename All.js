describe("Selecting All",function () {
    function Add(a,b){
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);

        element(by.id("gobutton")).click();
    }

    it('Open Angular website', function () {


        browser.get('http://juliemr.github.io/protractor-demo/');

        Add(2,3);
        Add(4,3);
        Add(6,3);

        element.all(by.repeater("result in memory")).each(function (item) {

            item.element(by.css("td:nth-child(3)")).getText().then(function (text) {

                console.log(text);

            })

        })
})
})