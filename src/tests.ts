import test from 'ava';

import './index';

import * as bluebird from 'bluebird';


test('The Promise is from bluebird module', t => {
    t.true(global.Promise === bluebird, "The global Promise isn't bluebird!");
});
