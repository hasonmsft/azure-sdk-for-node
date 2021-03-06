/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the UnregisterApplicationType class.
 * @constructor
 * @member {string} [applicationTypeVersion]
 * 
 */
function UnregisterApplicationType() {
}

/**
 * Defines the metadata of UnregisterApplicationType
 *
 * @returns {object} metadata of UnregisterApplicationType
 *
 */
UnregisterApplicationType.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'UnregisterApplicationType',
    type: {
      name: 'Composite',
      className: 'UnregisterApplicationType',
      modelProperties: {
        applicationTypeVersion: {
          required: false,
          serializedName: 'ApplicationTypeVersion',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = UnregisterApplicationType;
