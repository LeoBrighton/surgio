'use strict';

const moxios = require('moxios');
const fs = require('fs');
const path = require('path');

moxios.install();

moxios.stubRequest('/gui-config.json', {
  status: 200,
  responseText: fs.readFileSync(path.join(__dirname, 'asset/gui-config-1.json'), {
    encoding: 'utf8',
  }),
});
moxios.stubRequest('/test-ss-sub.txt', {
  status: 200,
  responseText: fs.readFileSync(path.join(__dirname, 'asset/test-ss-sub.txt'), {
    encoding: 'utf8',
  }),
});
moxios.stubRequest('/test-ssr-sub.txt', {
  status: 200,
  responseText: fs.readFileSync(path.join(__dirname, 'asset/test-ssr-sub.txt'), {
    encoding: 'utf8',
  }),
});
moxios.stubRequest('/test-v2rayn-sub.txt', {
  status: 200,
  responseText: fs.readFileSync(path.join(__dirname, 'asset/test-v2rayn-sub.txt'), {
    encoding: 'utf8',
  }),
});
moxios.stubRequest('/netflix.list', {
  status: 200,
  responseText: fs.readFileSync(path.join(__dirname, 'asset/netflix.list'), {
    encoding: 'utf8',
  }),
});
