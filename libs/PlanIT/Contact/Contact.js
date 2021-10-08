
class Contact {
    constructor() {
		
	}

    // constructor() {
	// 	this.container.waitForText();
	// }
	// /**
	//  * @type {WebElement}
	//  */
	// get container() {
	// 	return browser.element(`//form/fieldset`);
	// }

    get submitButton() {
		return browser.element('//form[@name="form"]/div/a');
	}

    get foreNameObj(){
        return browser.element('#forename');
    }

    get emailObj(){
        return browser.element('#email');
    }

    get messageObj(){
        return browser.element('#message');
    }

    setForename(value){
        this.foreNameObj.setValue(value);
    }

    setEmail(value){
        this.emailObj.setValue(value);
    }

    setMessage(value){
        this.messageObj.setValue(value);
    }

}
export default Contact; // need constructor, so that another class can create object
//export default new Contact(); // no d to maintain constructor




