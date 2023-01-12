Running `yarn storybook`:

```sh
yarn run v1.22.19
$ start-storybook -p 6006
info @storybook/react v6.5.15
info
info => Loading presets
info Addon-docs: using MDX1
info => Using implicit CSS loaders
info => Using default Webpack5 setup
<i> [webpack-dev-middleware] wait until bundle finished
10% building 0/1 entries 0/0 dependencies 0/0 modules
info => Using cached manager
99% done plugins webpack-hot-middlewarewebpack built preview 0f3f790608dd0e532ac7 in 3849ms
ModuleParseError: Module parse failed: The keyword 'private' is reserved (16:29)
File was processed with these loaders:
 * ./node_modules/babel-loader/lib/index.js
You may need an additional loader to handle the result of these loaders.
| import { jsx as _jsx } from "react/jsx-runtime";
| var ReferenceProvider = /*#__PURE__*/function () {
>   function ReferenceProvider(private value = "default") {
|     _classCallCheck(this, ReferenceProvider);
|   }
    at handleParseError (/Users/moises/Workspace/storybook-repro/moises-composer-ui/node_modules/@storybook/builder-webpack5/node_modules/webpack/lib/NormalModule.js:976:19)
    at /Users/moises/Workspace/storybook-repro/moises-composer-ui/node_modules/@storybook/builder-webpack5/node_modules/webpack/lib/NormalModule.js:1095:5
    at processResult (/Users/moises/Workspace/storybook-repro/moises-composer-ui/node_modules/@storybook/builder-webpack5/node_modules/webpack/lib/NormalModule.js:800:11)
    at /Users/moises/Workspace/storybook-repro/moises-composer-ui/node_modules/@storybook/builder-webpack5/node_modules/webpack/lib/NormalModule.js:860:5
    at /Users/moises/Workspace/storybook-repro/moises-composer-ui/node_modules/@storybook/builder-webpack5/node_modules/loader-runner/lib/LoaderRunner.js:407:3
    at iterateNormalLoaders (/Users/moises/Workspace/storybook-repro/moises-composer-ui/node_modules/@storybook/builder-webpack5/node_modules/loader-runner/lib/LoaderRunner.js:233:10)
    at iterateNormalLoaders (/Users/moises/Workspace/storybook-repro/moises-composer-ui/node_modules/@storybook/builder-webpack5/node_modules/loader-runner/lib/LoaderRunner.js:240:10)
    at /Users/moises/Workspace/storybook-repro/moises-composer-ui/node_modules/@storybook/builder-webpack5/node_modules/loader-runner/lib/LoaderRunner.js:255:3
    at context.callback (/Users/moises/Workspace/storybook-repro/moises-composer-ui/node_modules/@storybook/builder-webpack5/node_modules/loader-runner/lib/LoaderRunner.js:124:13)
    at /Users/moises/Workspace/storybook-repro/moises-composer-ui/node_modules/babel-loader/lib/index.js:44:71

WARN Broken build, fix the error above.
WARN You may need to refresh the browser.

info => Loading presets
99% done plugins webpack-hot-middlewarewebpack built preview 0e64a33cfc61432585e6 in 591ms
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
