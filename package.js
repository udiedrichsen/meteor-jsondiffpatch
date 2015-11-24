Package.describe({
    name: 'doedel:jsondiffpatch',
    summary: 'Meteor package for jsondiffpatch - Diff & patch JavaScript objects.',
    version: '1.0.4',
    git: 'https://github.com/udiedrichsen/meteor-jsondiffpatch'
});

Npm.depends({
    jsondiffpatch: '0.1.37'
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@0.9.2.2');
    api.export('jsondiffpatch');
    api.addFiles('lib/jsondiffpatch.js', ['client','server']);
});
