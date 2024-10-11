/**
 * Creates an Intersection Observer for monitoring element visibility within the viewport.
 *
 * When the element enters or exits the viewport, a corresponding custom event
 * (`enterViewport` or `exitViewport`) is dispatched on the element.
 *
 * @param {Element} element - The DOM element to observe for visibility changes.
 * @returns {Object} An object containing a `destroy` method to stop observing the element.
 *
 * @example
 * const observer = viewport(document.querySelector('#myElement'));
 * // To stop observing later:
 * observer.destroy();
 */
declare const viewport: (element: Element) => object;
export default viewport;
