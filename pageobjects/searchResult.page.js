var Page = require('./page');

var SearchResultPage = Object.create( Page, {
	resultElem : {get: function() {return browser.element('a.v-align-middle')}},

	openFirst: {value: function() {
		this.resultElem.click()
	}},
	FirstElemHasText: {value: function(text) {
		return this.resultElem.getText() == text;
	}}
});

module.exports = SearchResultPage;
