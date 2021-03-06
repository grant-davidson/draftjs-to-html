/* @flow */

/**
* Utility function to execute callback for eack key->value pair.
*/
export function forEach(obj, callback) {
  if (obj) {
    for (const key in obj) { // eslint-disable-line no-restricted-syntax
      if ({}.hasOwnProperty.call(obj, key)) {
        callback(key, obj[key]);
      }
    }
  }
}

/**
* The function returns true if the string passed to it has no content.
*/
export function isEmptyString(str) {
  if (str === undefined || str === null || str.length === 0 || str.trim().length === 0) {
    return true;
  }
  return false;
}

/**
 * isNumeric returns true if the supplied value is either a number or a string
 * the is solely numeric
 */
export function isNumeric(str) {
  if (typeof(str) === "number") return true;
  if (isEmptyString(str)) return false;
  return /^-?\d+$/.test(str.trim());
}