import Shop from "./Shop/Shop";
import Contact from "./Contact/Contact";

class LandingPagePlanIt {

	get homeButton() {
		return browser.element('//*[@id="nav-home"]/a');
	}

    get shopButton() {
		// return browser.element('#nav-shop > a');
        return browser.element('//*[@id="nav-shop"]/a')
	}

    get contactsButton() {
		// return browser.element('#nav-contact > a');
        return browser.element('//*[@id="nav-contact"]/a')
	}

    get getShopClassObj() {
        return new Shop();
    }

    get getContactObj() {
		//return Contact;
        return new Contact();
	}

    
	clickCartButton(){
        browser.element(`//*[@id="nav-cart"]/a`).click()
    }

}

export default new LandingPagePlanIt();

//#forename

////*[@id="nav-contact"]/a

//*[@id="nav-contact"]/a




