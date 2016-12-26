import * as bluebird from 'bluebird';


//  Overwrite the original Promise of the definition
declare class Promise<R> extends bluebird<R> {}
declare namespace NodeJS {
    export interface Global {
        Promise: typeof Promise;
    }
}
declare var global: NodeJS.Global;


//  Overwrite the original Promise in NodeJS
global.Promise = bluebird;
