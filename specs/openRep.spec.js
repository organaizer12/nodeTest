var HomePage = require('../pageobjects/home.page');
var SearchResultPage = require('../pageobjects/searchResult.page');
var expect = require('chai').expect;
var Page = require('../pageobjects/page')


describe('open home page', function() {

	it('Simple test', function() {

		HomePage.open();
		HomePage.enterToSearch('organaizer12/nodeTest');
		HomePage.searchClick();
		expect(SearchResultPage.FirstElemHasText('organaizer12/nodeTest')).to.be.true;

	})
})
