/**
 * 
 * @author Rajani Gatla
 */

 import assert from "assert";
 import LandingPage from "../../libs/PlanIT/LandingPagePlanIT";
 import LoginUtility from "../../libs/PlanIT/Utilities/Login";
 
 const LoginUTL = "http://jupiter.cloud.planittesting.com";

 const item1= "Funny Cow";
 const item2= "Fluffy Bunny";

 
 describe(`Testcase1 to verify the errors`, () => {
     before(() => LoginUtility.login(LoginUTL));

     it(`From the home page go to contact page`, () => {
        browser.pause(2000);  
        LandingPage.shopButton.click();
        browser.pause(2000);        
    });

    it(`click on buy button twice on funny cow and once on fluffy bunny` , () => { 
        LandingPage.getShopClassObj.clickBuyItem(item1);
        LandingPage.getShopClassObj.clickBuyItem(item1);
        LandingPage.getShopClassObj.clickBuyItem("Fluffy Bunny");
        browser.pause(2000);  
    });

    it(`click on cart menu and  Verify the items are in the cart` , () => {
        LandingPage.clickCartButton();
        browser.pause(2000); 

        let tableOBJ = browser.$$('//form[@name="form"]/table/tbody/tr');
        let cartCount = tableOBJ.length;
        // console.log(cartCount);
        assert.equal(cartCount, '2', 'Expected cart items should be 2, found:' + cartCount);

        let value= browser.$('//form[@name="form"]/table/tbody/tr[1]//input[@name="quantity"]').getAttribute('value');
        // console.log(value);
        assert.equal(value, '2', 'Expected count of items should be 2, found:' + value);

        let itemName= browser.$('//form[@name="form"]/table/tbody/tr[1]/td[1]').getText();
        console.log(itemName);
        assert.equal(itemName, item1, `Expected count of items should be ${item1}, found:` + itemName);

        value= browser.$('//form[@name="form"]/table/tbody/tr[2]//input[@name="quantity"]').getAttribute('value');
        console.log(value);
        assert.equal(value, '1', 'Expected count of items should be 1, found:' + value);

        itemName= browser.$('//form[@name="form"]/table/tbody/tr[2]/td[1]').getText();
        console.log(itemName);
        assert.equal(itemName, item2, `Expected count of items should be ${item2}, found:` + itemName);    

    });

    

}); 