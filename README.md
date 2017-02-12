# bluebird-ployfill

[![npm-v-badge][npm-v-badge]][npm-url] [![npm-dt-badge][npm-dt-badge]][npm-url] [![travis-ci-master-badge][travis-ci-master-badge]][travis-ci-url] [![coverge-master-badge][coverge-master-badge]][coverge-master-url]

Using bluebird to replace origin Promise in global.

Because origin Promise is so weak, bluebird have good performance, please refer [bluebird-benchmark]

(By the way, it's only for Node.js environment)

## Install

```shell
$ node install bluebird-ployfill
```

## Usage & Example

```javascript
import 'bluebird-ployfill';

import { stat } from 'fs';
const statAsync = Promise.promisify(stat);  // Using bluebird promise in global
statAsync('path')
    .then(stats => {
        // do something
    }).catch(err => {
        // do something
    })
```


[benchmark]: https://github.com/petkaantonov/bluebird/tree/master/benchmark

[travis-ci-master-badge]: https://api.travis-ci.org/TonyPythoneer/bluebird-ployfill.svg?branch=master
[travis-ci-url]: https://travis-ci.org/TonyPythoneer/bluebird-ployfill

[coverge-master-badge]: https://codecov.io/gh/TonyPythoneer/bluebird-ployfill/branch/master/graph/badge.svg
[coverge-master-url]: https://codecov.io/gh/TonyPythoneer/bluebird-ployfill/branch/master

[npm-v-badge]: https://img.shields.io/npm/v/bluebird-ployfill.svg
[npm-dt-badge]: https://img.shields.io/npm/dt/bluebird-ployfill.svg
[npm-url]: https://www.npmjs.com/package/bluebird-ployfill
