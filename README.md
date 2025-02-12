# 🔐 Mnemonic to Private Key

> 🚀 A simple utility to recover your Solana private key from a mnemonic phrase

## 🎯 Purpose

This tool helps you recover your Solana private key if you have your mnemonic phrase (seed phrase) but lost access to your private key. Perfect for wallet recovery and development purposes.

## ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/Tomilola-ng/mnemonic-to-privatekey.git

# Navigate to project directory
cd mnemonic-to-privatekey

# Install dependencies
npm install

# Run the script
node index.js
```

## 📋 Prerequisites

- Node.js v16 or higher
- npm (comes with Node.js)

## 🛠️ Installation

Just install the required dependencies:

```bash
npm install @solana/web3.js bip39 ed25519-hd-key
```

## 🔧 Usage

1. Open `index.js`
2. Replace the mnemonic placeholder with your actual mnemonic phrase:
```javascript
const mnemonic = "your twelve or twenty four word mnemonic phrase here";
```
3. Run the script:
```bash
node index.js
```

The script will output your:
- Private Key (as a hex string)
- Public Key (your Solana wallet address)

## ⚠️ Security Warnings

- 🔒 Never share your mnemonic phrase or private key
- 🗑️ Clear your terminal history after running the script
- 💾 Store recovered keys securely
- 🚫 Don't commit any real mnemonic phrases to the repository

## 📝 License

MIT License - feel free to use and modify as needed!

## 🤝 Contributing

Issues and pull requests are welcome! Feel free to contribute to this project.

## 🙏 Support

If you find this helpful, please give it a ⭐️!

---
Made with 💖 by [Tomilola-ng](https://github.com/Tomilola-ng)
