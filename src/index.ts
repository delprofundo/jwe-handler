const { JWK } = require( "node-jose" );
const { encrypt, decrypt } = require( "./lib/jose" );

const makeKey = (pem: string) => JWK.asKey( pem, "pem" );

/**
 * takes a cryptogram and private key returning the cleartext payload
 * @param payload
 * @param key
 * @returns {Promise<Promise<*>|*>}
 */
async function decryptJWE( payload: object, key: string ) {
  return decrypt( payload, await makeKey( key ));
}

/**
 * takes a public key and payload to create a JWE
 * @param payload
 * @param key
 * @returns {Promise<*|*>}
 */
async function createJWE( payload: object, key:string ) {
  return encrypt( payload, await makeKey( key ));
}

module.exports = {
  createJWE: createJWE,
  decryptJWE: decryptJWE,
};