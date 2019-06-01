# simple JWE converter

this module performs two basic tasks create and decrypt JWE tokens.

the creation process also encodes the JWE as base64.

requires a PEM formatted public cert or private key to encrypt or a PEM formatted private key to decrypt

### installation

`npm i jwe-handler`

### usage

#### create JWE

```
  try {
    generatedJwe = await createJWE( itemToEncrypt, jwaPem );
  } catch( err ) {
    logger.error( "error in generate JWE try block : ", err );
    throw err;
  }
```

#### decrypt JWE

```
  try {
    localClientRecord = await decryptJWE( clientToken, jwaPem );
  } catch( err ) {
    console.log( "error trying the decrypt : ", err );
    context.fail( "Unauthorized" );
  }
```

author: bruno@hypermedia.tech

![alt text](https://public-docs-encryption.s3-us-west-2.amazonaws.com/ht_square_small.png )
![hypermedia.tech](https://public-docs-encryption.s3-us-west-2.amazonaws.com/ht_square_small.png)