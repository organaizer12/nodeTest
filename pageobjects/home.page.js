var Page = require('./page');

var searchText = '';

var HomePage = Object.create( Page, {
	SearchField: {get: function() { return browser.element('.header-search-input'); } },
	//Suggest:{get: function() { return browser.element(`//*[contains(text(), ${text})]`); } },
	btnSearch: {get: function() { return browser.element('#jump-to-suggestion-search-global')}},

    open: { value: function() {
        Page.open.call(this,'');
    } },

    enterToSearch:{ value: function(text) {
    	searchText = text;
    	this.SearchField.setValue(searchText);
    }},
    searchClick:{value: function() {
    	//browser.waitUntil(this.btnSearch);
    	//browser.waitForVisible(this.btnSearch);
    	browser.waitForText(`//*[contains(text(), ${searchText})]`, 1500);
    	this.btnSearch.click();
    	//browser.click(`//*[contains(text(), ${searchText})]`);

    }},

});

module.exports = HomePage;