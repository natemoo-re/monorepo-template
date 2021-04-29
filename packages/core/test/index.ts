
import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as mod from '../src';

test('default', () => {
	assert.type(mod.default, 'function');
});

test.run();
