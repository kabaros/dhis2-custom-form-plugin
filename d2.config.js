const config = {
    type: 'app',

    entryPoints: {
        app: './src/App.js',
        plugin: './src/App.js',
    },
    requiredProps: [
        'htmlCode',
        'initialValues',
        'metadata',
        'dataSet',
        'saveValue',
    ],
}

module.exports = config
