/** @module filenamify-spaces */

/**
 * Returns the number of seconds passed since Unix epoch (01 January 1970)
 * @function
 * @returns {number} Seconds since epoch
 * @example
 * import filenamifySpaces from "filenamify-spaces"
 * const result = filenamifySpaces()
 * result === 1549410770
 */
export default () => Math.floor(Date.now() / 1000)