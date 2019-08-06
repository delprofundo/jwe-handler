const encodeBuffer = ( buffer: Buffer ) : string => buffer.toString( "base64" );
const encodeString = ( string: string ): string  => encodeBuffer( Buffer.from( string ));
const encodeData = ( data: object ): string => encodeString( JSON.stringify( data ));

const encode = ( data: Buffer|string|object ): string => {
  if( Buffer.isBuffer( data )) return encodeBuffer( data );
  if( typeof data === "string" ) return encodeString( data );
  return encodeData( data );
};

const decode = ( string: string ) : object|string => {
  const decoded = Buffer.from( string, "base64").toString();
  try {
    return JSON.parse( decoded );
  } catch( err ) {
    return decoded
  }
};

module.exports = { encode, decode };