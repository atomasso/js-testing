// any of the setup code can go to this support file that we require in our mocha apps
// for setting up global data that will be used in all of our tests

import {expect} from 'chai';
import sinon from 'sinon';

global.expect = expect;
global.sinon = sinon;