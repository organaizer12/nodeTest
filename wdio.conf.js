exports.config = {

    specs: [
        './specs/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,

    capabilities: [{

        maxInstances: 5,
        //
        browserName: 'firefox',
        "moz:firefoxOptions": {
          // flag to activate Firefox headless mode (see https://github.com/mozilla/geckodriver/blob/master/README.md#firefox-capabilities for more details about moz:firefoxOptions)
          // args: ['-headless']
        }
    }],

    sync: true,

    coloredLogs: true,

    deprecationWarnings: true,

    bail: 0,

    screenshotPath: './errorShots/',

    baseUrl: 'https://github.com/',

    waitforTimeout: 999999,

    connectionRetryTimeout: 90000,

    connectionRetryCount: 3,

    reporters: ['dot'],
    reporterOptions: {

    },
   
    framework: 'mocha',

    mochaOpts: {
        ui: 'bdd',
        timeout:30000,
    },


    before: function() {
        var chai = require('chai');
        global.expect = chai.expect;
        chai.Should();
    },
    
}
