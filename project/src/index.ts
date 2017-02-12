import * as bluebird from 'bluebird';

//  Overwrite the original Promise in NodeJS
global.Promise = bluebird;
