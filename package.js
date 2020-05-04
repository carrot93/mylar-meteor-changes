Package.describe({
    summary: 'Mylar, meteor changes',
    version: '0.3.2_1',
    name: 'shjiaye:meteor-changes',
    git: 'https://github.com/carrot93/mylar-meteor-changes.git'
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.0');

    api.use(['ddp', 'random', 'underscore', 'mongo', 'minimongo', 'ejson',
             'dburles:mongo-collection-instances@0.2.6','mongo-id@1.0.5'], ['client', 'server']);

    api.addFiles(['helpers.js', 'mongo-ddp-adaptor.js', 'ddp-framework.js'], ['client', 'server']);
});
