/**
 * 
 * @author Rajani Gatla
 */
 import assert from "assert";
 import LandingPage from "../../libs/PlanIT/LandingPagePlanIT";
 import LoginUtility from "../../libs/PlanIT/Utilities/Login";

 const LoginUTL = "http://jupiter.cloud.planittesting.com";
 
 let errorObj1;
 let errorObj2;
 let errorObj3;

 describe(`Testcase1 to verify the errors`, () => {
    before(() => LoginUtility.login(LoginUTL));

    it(`From the home page go to contact page`, () => {
        browser.pause(2000);  
        LandingPage.contactsButton.click();
        browser.pause(2000);       
    });

    it(`Click submit button and Validate errors`, () => {
        LandingPage.getContactObj.submitButton.click();
        browser.pause(2000);       

        errorObj1 = browser.element("//form/fieldset/div[1][contains(@class, 'error')]/div/span");
        errorObj2 = browser.element("//form/fieldset/div[3][contains(@class, 'error')]/div/span");
        errorObj3 = browser.element("//form/fieldset/div[5][contains(@class, 'error')]/div/span");

        //#email-err
        // #forename-err
        //Assuming the objects places are constant
        //verifying if the errors are displayed
        assert.strictEqual(errorObj1.isVisible(), true , "no error message object found for formname ") ;  
        assert.strictEqual(errorObj2.isVisible(), true , "no error message object found for email") ;  
        assert.strictEqual(errorObj3.isVisible(), true , "no error message object found for Message") ;  

        //Verifying the error messages
        assert.equal(errorObj1.getText(), 'Forename is required' , `Error message found for formname is incorrect, actual: ${errorObj1.getText()} ,expected:Forename is required` ) ;  
        assert.equal(errorObj2.getText(), 'Email is required' , `Error message found for formname is incorrect, actual: ${errorObj2.getText()} ,expected:Email is required` ) ;  
        assert.equal(errorObj3.getText(), 'Message is required' , `Error message found for formname is incorrect, actual: ${errorObj3.getText()} ,expected:Message is required` ) ;  
    });


    it(' Populate mandatory fields and Validate errors are gone', () => {
        LandingPage.getContactObj.setForename("Sirisha");
        LandingPage.getContactObj.setEmail("gatla.rajani@yahoo.com");
        LandingPage.getContactObj.setMessage("writing the automation code in selenium java script");

        errorObj1 = browser.element("//form/fieldset/div[1][contains(@class, 'error')]/div/span");
        errorObj2 = browser.element("//form/fieldset/div[3][contains(@class, 'error')]/div/span");
        errorObj3 = browser.element("//form/fieldset/div[5][contains(@class, 'error')]/div/span");

        //verifying if the errors are gone
        assert.strictEqual(errorObj1.isVisible(), false , " error message object found for formname ") ;  
        assert.strictEqual(errorObj2.isVisible(), false , " error message object found for email") ;  
        assert.strictEqual(errorObj3.isVisible(), false , " error message object found for Message") ; 
    });    

 });



