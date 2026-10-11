const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync(process.argv[2] || 'work/bettercanvas/js/background.js', 'utf8');
test('background loads on Safari without setUninstallURL', () => {
  const chrome = {runtime: {onInstalled: {addListener() {}}}};
  assert.doesNotThrow(() => vm.runInNewContext(source, {chrome}));
});
test('background retains uninstall callback where supported', () => {
  let url;
  const chrome = {runtime: {onInstalled: {addListener() {}}, setUninstallURL(value) { url = value; }}};
  vm.runInNewContext(source, {chrome});
  assert.equal(url, 'https://diditupe.dev/bettercanvas/goodbye');
});
