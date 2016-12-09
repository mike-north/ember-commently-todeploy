'use strict';
/*jshint node:true*/
var normalizeEntityName = require('ember-cli-normalize-entity-name');

module.exports = {
    availableOptions: [{
        name: 'base', // Required
        key: 'baseUrl', // Optional, default is the camelized name
        description: 'The base URL of the image placeholder service', // Optional
        type: String, // Required
        default: 'placekitten.com', // Optional, default is undefined
        required: true // Optional, default is false
    }],
    locals: function(options) {
        return {
            baseUrl: options.base
        };
    },
    description: 'Generates a helper function.',
    normalizeEntityName: function(entityName) {
        return normalizeEntityName(entityName);
    },

};