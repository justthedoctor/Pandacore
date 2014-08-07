var privsec = module.exports;

privsec.deps = {};
privsec.deps.bnjs = require('bn.js');
privsec.deps.bs58 = require('bs58');
privsec.deps.elliptic = require('elliptic');
privsec.deps.hashjs = require('hash.js');
privsec.deps.sha512 = require('sha512');
privsec.deps.ripemd160 = require('ripemd160');

privsec.address = require('./lib/address');
privsec.base58 = require('./lib/base58');
privsec.base58check = require('./lib/base58check');
privsec.constants = require('./lib/constants');
privsec.hash = require('./lib/hash');

//privsec.bn = require('lib/bn');
//privsec.key = require('lib/key');
//privsec.point = require('lib/point');
//privsec.privkey = require('lib/privkey');
//privsec.pubkey = require('lib/pubkey');
//privsec.script = require('lib/script');
//privsec.scriptexec = require('lib/scriptexec');
//privsec.tx = require('lib/tx');
//privsec.txpartial = require('lib/txpartial');

//privsec.bip32 = require('lib/bip32');
//privsec.bip70 = require('lib/bip70');