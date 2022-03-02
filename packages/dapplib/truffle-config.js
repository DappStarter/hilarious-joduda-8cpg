require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half enter blue tooth notice rival smile pull hunt casual flip seat'; 
let testAccounts = [
"0xbbbca1864ec345f7795da965ddaece4e5338b7679c2cdb1fab5da3e0be59de6c",
"0x17ed9c8e11354a6233284b388d3b9c6e3ecae9eda1737785aea2750acc9c0294",
"0xb4f0d5da8dc616b677d78371defbbda2764a68a38614b445eec2f83fab425bfa",
"0x950c5aff908c50c814c78e7f469ea44446beb8d67ebeab3a89dc46c03d2a0e72",
"0x0022db0512e5c79c1bbbcf3b9caa183c3c32203a3892bd6a271511788befe8ef",
"0xa556131503455c2a4d17c23a68c9f8d81c9a1abeb278153fa9009cacffec9b4d",
"0x190438deab1fc715f73f271e668d75615b4fc18749804fdf3110e902ac4cea97",
"0xdf13daecd880350de3cb1d61ecf6a03a4dd51f06bc8a8b55282647be8e75d27f",
"0x634936d24139bba846ff7b36ce401b8fdb1331745a9e095477309540f7f16463",
"0xc556c666cc749351977b8ab0d18acd0e886331c51af890134e5649bb46cc910f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


