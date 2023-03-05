const fs = require("fs")

// Loads environment variables from .env file (if it exists)
require("dotenv").config()

const Location = {
  Inline: 0,
  Remote: 1,
}

const CodeLanguage = {
  JavaScript: 0,
}

const ReturnType = {
  uint: "uint256",
  uint256: "uint256",
  int: "int256",
  int256: "int256",
  string: "string",
  bytes: "Buffer",
  Buffer: "Buffer",
}

// Configure the request by setting the fields below
const requestConfig = {
  // location of source code (only Inline is currently supported)
  codeLocation: Location.Inline,
  // location of secrets (Inline or Remote)
  secretsLocation: Location.Inline,
  // code language (only JavaScript is currently supported)
  codeLanguage: CodeLanguage.JavaScript,
  // string containing the source code to be executed
  source: fs.readFileSync("zkp-example.js").toString(),
  //source: fs.readFileSync('./API-request-example.js').toString(),
  // secrets can be accessed within the source code with `secrets.varName` (ie: secrets.apiKey). The secrets object can only contain string values.
  secrets: { discountCode: "Chainlink" },
  // ETH wallet key used to sign secrets so they cannot be accessed by a 3rd party
  walletPrivateKey: process.env["PRIVATE_KEY"],
  // args (string only array) can be accessed within the source code with `args[index]` (ie: args[0]).
  args: ['7158525c585c82da732905c2f2da5e5227515659562f2c5c52215e5128f5f2c5a58755e2051', "7158525c585c82da732905c2f2da5e5227515659562f2c5c52215e5128f5f2c5a58755e2051"],
  // expected type of the returned value
  expectedReturnType: ReturnType.uint256,
  // Redundant URLs which point to encrypted off-chain secrets
  secretsURLs: ["https://raw.githubusercontent.com/egeaybars123/chainlink-functions-example/main/offchain-secrets.json"],
  // Default offchain secrets object used by the `functions-build-offchain-secrets` command
  globalOffchainSecrets: {discountCode: "Chainlink"},
  // Per-node offchain secrets objects used by the `functions-build-offchain-secrets` command
  perNodeOffchainSecrets: [], 
}

module.exports = requestConfig
