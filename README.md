# Custom Form with Plugins

This is a proof of concept for using [plugins](https://github.com/dhis2/app-runtime/blob/alpha/docs/components/Plugin.md) to "host" a custom form in DHIS2 Data Entry App (beta).

- The plugin code is [here](https://github.com/kabaros/dhis2-custom-form-plugin/blob/main/src/App.js)

For more context and discussion, check [the PR](https://github.com/kabaros/dhis2-custom-form-plugin) in Data Entry app.

> Warning: This is a proof of concept to guide the conversation about what we should do next with custom forms. My recommendation is that we should NOT support this way of implementing custom forms (not even document it) as running ad-hoc JavaScript from the forms' implementors can have serious security implications.


