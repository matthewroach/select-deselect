var selectSettings = {
			selectAll: '#select_all',
			deselectAll: '#deselect_all',
			selectItems: '#people-choice input'
		};


beforeEach(function() {
  loadFixtures('select.html');
  sd = new SelectDeselect();
  sd.init(selectSettings);
});



afterEach(function() {
	sd.destroy();
});



describe('Select Deselect All', function() {



	it('should be a function', function() {
		expect(SelectDeselect).toBeDefined();
	});



	it('should select all items upon clicking select all', function() {

		var spyEvent = spyOnEvent( selectSettings.selectAll, 'click' );
		$(selectSettings.selectAll)[0].click();
		expect('click').toHaveBeenTriggeredOn(selectSettings.selectAll);
		expect( $(selectSettings.selectAll) ).toBeChecked();

		expect( $(selectSettings.selectItems) ).toBeChecked();

		expect( $(selectSettings.deselectAll) ).not.toBeChecked();

	});



	it('should deselect all items upon clicking deselect all', function() {

		var spyEvent = spyOnEvent( selectSettings.deselectAll, 'click' );
		$(selectSettings.deselectAll)[0].click();
		expect('click').toHaveBeenTriggeredOn(selectSettings.deselectAll);
		expect( $(selectSettings.deselectAll) ).toBeChecked();

		expect( $(selectSettings.selectAll) ).not.toBeChecked();

		expect( $(selectSettings.selectItems) ).not.toBeChecked();

	});



	it('should select all items upon clicking select all when all inputs are deselected', function() {

		$(selectSettings.deselectAll)[0].click();

		var spyEvent = spyOnEvent( selectSettings.selectAll, 'click' );
		$(selectSettings.selectAll).click();
		expect('click').toHaveBeenTriggeredOn(selectSettings.selectAll);
		expect( $(selectSettings.selectAll) ).toBeChecked();

		expect( $(selectSettings.selectAll) ).toBeChecked();

		expect( $(selectSettings.selectItems) ).toBeChecked();

	});



	it('should deselect all items upon clicking deselect all when all inputs are selected', function() {

		$(selectSettings.selectAll).click();

		var spyEvent = spyOnEvent( selectSettings.deselectAll, 'click' );
		$(selectSettings.deselectAll).click();
		expect('click').toHaveBeenTriggeredOn(selectSettings.deselectAll);
		expect( $(selectSettings.deselectAll) ).toBeChecked();

		expect( $(selectSettings.selectAll) ).not.toBeChecked();

		expect( $(selectSettings.selectItems) ).not.toBeChecked();

	});



	it('should remove select all check when an item count is not equal to total', function() {

		$(selectSettings.selectAll).click();
		expect( $(selectSettings.selectAll) ).toBeChecked();

		var spyEvent = spyOnEvent( $(selectSettings.selectItems)[0], 'click' );
		$(selectSettings.selectItems)[0].click();
		expect('click').toHaveBeenTriggeredOn( $(selectSettings.selectItems)[0] );

		expect( $(selectSettings.deselectAll) ).not.toBeChecked();
		expect( $(selectSettings.selectAll) ).not.toBeChecked();

		expect( $(selectSettings.selectItems)[0] ).not.toBeChecked();
		expect( $(selectSettings.selectItems)[1] ).toBeChecked();

	});



	it('should select all when all items are checked', function() {

		expect( $(selectSettings.selectAll) ).not.toBeChecked();
		expect( $(selectSettings.deselectAll) ).not.toBeChecked();

		$(selectSettings.selectItems).click();

		expect( $(selectSettings.selectItems) ).toBeChecked();
		expect( $(selectSettings.deselectAll) ).not.toBeChecked();
		expect( $(selectSettings.selectAll) ).toBeChecked();

	});



});
