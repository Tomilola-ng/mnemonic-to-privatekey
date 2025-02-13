const { Keypair } = require("@solana/web3.js");
const { mnemonicToSeed } = require("bip39");
const { derivePath } = require("ed25519-hd-key");
const BS58 = require("bs58");

async function main() {
  const mnemonic = "your mnemonic phrase here";
  try {
    const keypair = await recoverKeypair(mnemonic);
    const base58PrivateKey = BS58.default.encode(keypair.secretKey);
    console.log("Private Key (Base58):", base58PrivateKey);
    console.log("Public Key:", keypair.publicKey.toString());
  } catch (error) {
    console.error("Error:", error);
  }
}

async function recoverKeypair(mnemonic, derivationPath = "m/44'/501'/0'/0'") {
  const seed = await mnemonicToSeed(mnemonic);
  const derivedSeed = derivePath(derivationPath, seed.toString("hex")).key;
  const keypair = Keypair.fromSeed(derivedSeed);
  return keypair;
}

main();
