describe("Actions",function () {

    it('Open Angular website', function () {

        //browser.waitForAngularEnabled(false);   // non angular web
        browser.get("https://qaclickacademy.github.io/protocommerce/");

        const sleep = browser.sleep;
        const actions = browser.actions;
        const el = element;

        el(by.linkText("Shop")).click()

        // Go throught each card - if title = iPhoneX Add to cart
        el.all(by.tagName("app-card")).each(function (item) {
            item.element(by.css("h4 a")).getText().then(function (text) {
                if(text=="iphone X")
                {
                    item.element(by.css("button[class*='btn-info']")).click();
                    console.log("iPhone X added to cart")
                }

            })

        })

        sleep(5000)

    })
})