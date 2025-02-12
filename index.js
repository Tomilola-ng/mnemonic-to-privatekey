const { Keypair } = require('@solana/web3.js');
const { mnemonicToSeed } = require('bip39');
const { derivePath } = require('ed25519-hd-key');

async function recoverKeypair(mnemonic, derivationPath = "m/44'/501'/0'/0'") {
    const seed = await mnemonicToSeed(mnemonic);
    const derivedSeed = derivePath(derivationPath, seed.toString('hex')).key;
    const keypair = Keypair.fromSeed(derivedSeed);
    return keypair;
}

async function main() {
    // Replace with your actual mnemonic code
    const mnemonic = "your twelve or twenty four word mnemonic phrase here";
    try {
        const keypair = await recoverKeypair(mnemonic);
        console.log('Private Key:', Buffer.from(keypair.secretKey).toString('hex'));
        console.log('Public Key:', keypair.publicKey.toString());
    } catch (error) {
        console.error('Error:', error);
    }
}

main();