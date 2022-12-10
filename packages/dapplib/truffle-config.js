require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help olympic trip notice rival smile provide include process front skill'; 
let testAccounts = [
"0xf5264879d9f8ae0f224bc8758606ba1056451bfcdc2f8509c2dab01ca5444065",
"0x314c19497cdfb81c80ec4c28f0d6fa8bc09466dd04bf0649fe5dbe06948f42bf",
"0xfd3a7ee1f01af3c47e6f391685affb3890bf70c7025c6fc60df05fd49fd69b59",
"0x79e49e97cc491105247b8325889f3dc314309c48c1507dfa2ddc833d6b685e2e",
"0x84ab1210912ad291e50f5a370bd3af550220d6d55321a241cd62bf3c154c5e0f",
"0x024123131b0724d7d67ceaf4ec122e9a5e9482d369d347bb8330f3dc6d5c8424",
"0x862a3a5f870039ef70a4ce5ac3f87e7ebc102f1ba855a02b32c7946d3ebdf2cc",
"0xa4fb47b49a0ed64ddd71414d56c16a64208dbc41f05261263c111e1ad5a76a34",
"0x7f5130bf52cf7aeb6abd0f5829b5e0d8c7ee6a7abf30c44d5285b1b0ab5f3c16",
"0x847ba1e78e935dfb0fbeaab6ca5e2643f58b8cbc01be0236d2fcc501fc9b40fe"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

