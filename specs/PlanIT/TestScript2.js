/**
 * 
 * @author Rajani Gatla
 */

import assert from "assert";
import LandingPage from "../../libs/PlanIT/LandingPagePlanIT";
import LoginUtility from "../../libs/PlanIT/Utilities/Login";

const LoginUTL = "http://jupiter.cloud.planittesting.com";

describe(`Testcase1 to verify the errors`, () => {
    before(() => LoginUtility.login(LoginUTL));

    it(`From the home page go to contact page`, () => {
        LandingPage.contactsButton.click();
        browser.pause(2000);       
    });

    it(' Populate mandatory fields , Click submit button and verify for success message', () => {
        LandingPage.getContactObj.setForename("Sirisha");
        LandingPage.getContactObj.setEmail("gatla.rajani@yahoo.com");
        LandingPage.getContactObj.setMessage("writing the automation code in selenium java script");

        LandingPage.getContactObj.submitButton.click();
        // browser.pause(10000); 
        
        //Verify for successmessage
        browser.waitUntil(() => browser.waitForExist(`.alert-success`), 10000);
        let successObject = browser.element('.alert-success');
        assert.strictEqual(successObject.isVisible(), true, "success message is not displayed");

    });
    
 });

