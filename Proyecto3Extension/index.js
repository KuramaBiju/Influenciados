document.addEventListener('DOMContentLoaded', function() {
    var buttonTwitter = document.getElementById('btn');
    var buttonAll = document.getElementById('btnall');

    buttonTwitter.addEventListener('click', function(tab) {

        chrome.tabs.executeScript(null, { file: "twitter.js" })
    }, false);

    buttonAll.addEventListener('click', function(tab) {

        chrome.tabs.executeScript(null, { file: "all.js" })
    }, false);



}, false);