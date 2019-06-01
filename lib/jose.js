const { JWE } = require('node-jose');
const { encode, decode } = require('./base64');


const encrypt = async ( raw, publicKey ) => {
  if (!raw) throw new Error('Missing raw data.')
  const buffer = Buffer.from(JSON.stringify(raw))
  const encrypted = await JWE.createEncrypt({}, publicKey)
    .update(buffer)
    .final();
  return encode(encrypted)
};

const decrypt = async ( encrypted, privateKey ) => {
  if (!encrypted) throw new Error('Missing encrypted data.')
  const decoded = decode(encrypted);
  const { payload } = await JWE.createDecrypt(privateKey).decrypt(decoded);
  return JSON.parse(payload)
};


module.exports = {
  encrypt,
  decrypt
};