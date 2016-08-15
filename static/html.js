/*jslint browser: true*/
/*global $, window*/
$(document).ready(function () {
    'use strict';

    var DELETED_MESSAGE = '<h2>The key does not exist</h2>' +
            '<p>For security issues, the contents will be deleted immediately after first browsing.</p>' +
            '<p>Refresh the page will cause the contents inaccessiable.</p>';

    /**
     * Read html from local storage.
     */
    function renderLocalHtml() {
        var key = window.getParameterByName('key'),
            html = localStorage.getItem(key);
        localStorage.removeItem(key);
        if (html === null) {
            html = DELETED_MESSAGE;
        }
        window.addRenderedToDom(html);
    }

    renderLocalHtml();
});