import { JWE, JWK } from "node-jose";

const { encode, decode } = require('./base64');

const encrypt = async ( raw: object, publicKey: JWK.Key ) : Promise<JWE.Encryptor> => {
  if (!raw) throw new Error('Missing raw data.');
  const buffer = Buffer.from(JSON.stringify(raw), 'utf8');
  const encrypted = await JWE.createEncrypt({}, publicKey)
    .update(buffer)
    .final();
  return encode(encrypted)
};

const decrypt = async ( encrypted: string, privateKey: JWK.Key ) => {
  if (!encrypted) throw new Error('Missing encrypted data.');
  const decoded = decode(encrypted);
  // @ts-ignore
  const { payload } = await JWE.createDecrypt(privateKey).decrypt(decoded);
  return JSON.parse(payload.toString())
};


module.exports = {
  encrypt,
  decrypt
};