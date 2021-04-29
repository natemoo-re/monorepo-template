import { suite, test } from 'uvu';
import * as assert from 'uvu/assert';

import fn from '../src/index';

const tests = suite('test');

tests('should be a function', () => {
	assert.type(fn, 'function');
});

test.run()
