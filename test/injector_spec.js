/* jshint globalstrict: true */
/* global createInjector:false, setupModuleLoader: false, angular:false*/
'use strict';

describe('injector', function(){
	beforeEach(function(){
		delete window.angular;
		setupModuleLoader(window);
	});

	it('can be created', function(){
		var injector = createInjector([]);
		expect(injector).toBeDefined();
	});



});
/*
	it('has a constant that has been registerd to a module', function() {
		var module = angular.module('myModule', []);
		module.constant('aConstant', 42);
		var injector = createInjector(['myModule']);
		expect(injecor.has('aConstant')).toBe(true);		
	});

	it('has a constant that has been registerd to a module', function() {
		var module = angular.module('myModule', []);
		var injector = createInjector(['myModule']);
		expect(injecor.has('aConstant')).toBe(false);		
	});
*/