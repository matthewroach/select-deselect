/**
 *
 * Select Deslect Module
 *
 * A module to allow for select all and deselect all checkboxs to toggle the states
 * of a group of inputs.
 *
**/
(function() {



	function selectdeselect() {



		// Default settings for module
		var defaults = {
					selectAll: '#select_all',
					deselectAll: '#deselect_all',
					selectItems: '#people-choice input'
				};



		// Get Select All Element
		var getSelectAll = function() {
			return document.querySelector(defaults.selectAll);
		};



		// Get Deselect All Element
		var getDeSelectAll = function() {
			return document.querySelector(defaults.deselectAll);
		};



		// Get Select Item Elements
		var getSelectItems = function() {
			return document.querySelectorAll(defaults.selectItems);
		};



		// Get Select Item Elements checked
		var getSelectItemsChecked = function() {
			return document.querySelectorAll(defaults.selectItems + ':checked');
		};



		// Remove Checked Value from element
		var setCheckedState = function( _element, _state ) {
			_element.checked = _state;
		};



		// Un check the deselect All checkbox
		var unCheckDeselectAll = function() {
			getDeSelectAll().checked = false;
		};



		// Select All Items Toggle Function to select all elements
		var selectAllToggle = function( _checked ) {
			var items = getSelectItems();

			for ( var i=0; i<items.length; i++ ) {
				items[i].checked = _checked;
			}
		};



		// Select All Function to handle the select all input binding
		var selectAll = function() {
			setCheckedState( getDeSelectAll(), false );
			selectAllToggle(true);
		};



		// Deslect All Functions to un select all the elemnts
		var deSelectAll = function() {
			setCheckedState( getSelectAll(), false );
			selectAllToggle(false);
		};



		// Handle clicking on an item in the selection to decided select/deselect all states
		var itemsSelection = function() {
			var items = getSelectItems();
			var selected = getSelectItemsChecked();

			if ( items.length !== selected.length ) {
				setCheckedState( getDeSelectAll(), false );
				setCheckedState( getSelectAll(), false );
				return;
			}

			if ( items.length === selected.length ) {
				setCheckedState( getSelectAll(), true );
				return;
			}

		};



		// Event Bindings
		var eventBindings = function() {
			var selections = getSelectItems();

			// Select All Event Binding
			getSelectAll().addEventListener( 'click', selectAll, false );

			// Deselect All Bindings
			getDeSelectAll().addEventListener( 'click', deSelectAll, false );

			// Select Items Bindings
			for ( var i=0; i<selections.length; i++ ) {
				selections[i].addEventListener( 'click', itemsSelection, false );
			}

		};



		// Overwrite the default options with settings passed in
		var overwrite = function( _settings ) {
			if ( typeof(_settings) === 'object') {
				for ( key in _settings ) {
					if ( defaults[key] ) {
						defaults[key] = _settings[key];
					}
				}
			}
		};



		this.init = function( _settings ) {

			if ( _settings ) {
				overwrite(_settings);
			}

			eventBindings();

		};



		this.destroy = function() {
			getSelectAll().removeEventListener( 'click', selectAll, false );
			getDeSelectAll().removeEventListener( 'click', deSelectAll, false );
		};



	}



	SelectDeselect = selectdeselect;



})();

