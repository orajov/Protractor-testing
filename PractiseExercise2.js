describe("Actions",function () {

    it('Open Angular website', function () {

        //browser.waitForAngularEnabled(false);   // non angular web
        browser.get("https://qaclickacademy.github.io/protocommerce/");

        const sleep = browser.sleep;
        const actions = browser.actions;
        const el = element;

        el(by.name("name"))
            .sendKeys("Vendula")
        el(by.css("input[name='email']"))
            .sendKeys("vasa@email.cz")
        el(by.id("exampleInputPassword1"))
            .sendKeys("password2")
        el(by.css("input[type='checkbox']"))
            .click()
        el(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click()
        el.all(by.name("inlineRadioOptions"))
            .first()
            .click()
        el(by.buttonText("Submit")).click().then(function () {
            el(by.css("div[class*='alert']")).getText().then(function (text) {
                console.log(text)
                sleep(5000)

            })
        //Error message
        el(by.name("name")).clear()
            el(by.name("name")).sendKeys("V").then(function () {
                el(by.css("div[class*='alert-danger']")).getText().then(function (text) {
                    console.log(text)

                })

            })

        })

        sleep(5000)

    })
})