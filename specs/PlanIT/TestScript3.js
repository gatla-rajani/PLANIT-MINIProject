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
        LandingPage.getContactObj.setEmail("gatla.rajani.com");
        LandingPage.getContactObj.setMessage("writing the automation code in selenium java script");        

        //Looks like email only has invalid data.
        //forename [ usage of spl characters] and message has no contrains of length of characters
        let errorObj2 = browser.element("//form/fieldset/div[3][contains(@class, 'error')]/div/span");

        assert.strictEqual(errorObj2.isVisible(), true , "no error message object found for email") ;  
        assert.equal(errorObj2.getText(), 'Please enter a valid email' , `Error message found for formname is incorrect, actual: ${errorObj2.getText()} ,expected:Please enter a valid email` ) ;  

     });

});