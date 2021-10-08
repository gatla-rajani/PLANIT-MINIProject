class Shop{

	constructor() {
		// this.container.waitForText();
	}
	// /**
	//  * @type {WebElement}
	//  */
	// get container() {
	// 	return browser.element(`.form-horizontal well ng-pristine ng-valid ng-valid-required`);
	// }

    clickBuyItem(itemName){
        browser.element(`//div/h4[.="${itemName}"]/../p/a`).click()
    }


	clickCartButton(){
        browser.element(`//*[@id="nav-cart"]/a`).click()
    }
}

export default Shop;