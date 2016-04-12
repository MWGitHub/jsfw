"use strict";

/**
 * Optional base class for components.
 * Components do not have to extend this. They only need to implement
 * the class methods to be compatible with systems.
 */
var Component = function () {};

/**
 * Type of component which is used for component retrieval and setting.
 * @type {string}
 */
Component.type = 'Component';

/**
 * Sets parameters onto the component.
 * @param {Object} params the parameters to set.
 */
Component.prototype.setParams = function (params) {
  this.merge(params);
};

/**
 * Merges the input component to this.
 * @param  {Object} component the component to merge with.
 */
Component.prototype.merge = function (component) {
  Object.assign(this, component);
};

/**
 * Makes a copy of the component.
 * @type {{}} component the component to copy into.
 * @type {{}} params the params or component to copy from.
 */
Component.copy = function (component) {
  return JSON.parse(JSON.stringify(component));
};

/**
 * Returns the new value or the default value depending on if the new
 * value exists.
 * @param {*} newValue the new value to set if it exists.
 * @param {*} defaultValue the default value to fall back on.
 * @returns {*} the final value based on the value checks.
 */
Component.copyField = function (newValue, defaultValue) {
    if (newValue === null || newValue === undefined) return defaultValue;
    return newValue;
};

/**
 * Copies an array if the copied array exists.
 * @param {Array} newArray the array to copy into.
 * @param {Array} arrayToCopy the array to copy.
 * @returns {Array} the copied array or the new array if no copy exists.
 */
Component.copyPrimitiveArray = function (newArray, arrayToCopy) {
    var arr = newArray ? newArray : [];

    if (arrayToCopy) {
        return arr.concat(arrayToCopy);
    }
    return arr;
};

export default Component;
