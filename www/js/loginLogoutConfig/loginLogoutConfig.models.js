/**
 *  @module  loginLogoutConfig.models
 */
define([
    'jquery',
    'backbone',
    'util'
], function(jquery, Backbone, config) {
    'use strict';


    var configURL = "https://moodle-test.europa-uni.de/reflect.json";

    /**     @name Tab
     *      @constructor
     *      @augments Backbone.Model
     */
    var Tab = Backbone.Model.extend({});


    /**     collection for the starting page to select a course from a list
     *      @name TabCollection
     *      @constructor
     *      @augments Backbone.Collection
     */
    var TabCollection = Backbone.Collection.extend(/** @lends TabCollection.prototype */{
        /** @type {Tab} */
        model: Tab,
        url: configURL
    });

    return {
        configURL : configURL,
        TabCollection : TabCollection
    }

});