console.log("Running App version " + VERSION);

if (BROWSER_SUPPORTS_HTML5) {
    require("html5shiv");
    console.log('one');
}

if (PRODUCTION) {
    console.log('Add metrics');
}
