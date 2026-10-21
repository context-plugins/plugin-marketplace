import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * this is the 'alg' header value for encrypted JWT tokens. Depending upon the context, this refers
 * to key transport scheme to be used by the client and by the server. For instance:
 * - as `authorizationEncryptionAlg` value, it refers to the encoding algorithm used by server for
 *   transporting they keys on JARM objects
 * - as `requestEncryptionAlg` value, it refers to the expected key transport encoding algorithm
 *   that server expect from client when encrypting a Request Object
 * - as `idTokenEncryptionAlg` value, it refers to the algorithm used by the server to key transport
 *   of id_tokens
 *
 * **Please note that some of the algorithms are more secure than others, some are not supported
 * very well cross platforms and some (like RSA1_5) is known to be weak**.
 */
export const JweAlg = {
  Rsa15: "RSA1_5",
  RsaOaep: "RSA_OAEP",
  RsaOaep256: "RSA_OAEP_256",
  A128Kw: "A128KW",
  A192Kw: "A192KW",
  A256Kw: "A256KW",
  Dir: "DIR",
  EcdhEs: "ECDH_ES",
  EcdhEsA128Kw: "ECDH_ES_A128KW",
  EcdhEsA192Kw: "ECDH_ES_A192KW",
  EcdhEsA256Kw: "ECDH_ES_A256KW",
  A128Gcmkw: "A128GCMKW",
  A192Gcmkw: "A192GCMKW",
  A256Gcmkw: "A256GCMKW",
  Pbes2Hs256A128Kw: "PBES2_HS256_A128KW",
  Pbes2Hs384A192Kw: "PBES2_HS384_A192KW",
  Pbes2Hs512A256Kw: "PBES2_HS512_A256KW",
} as const;
export type JweAlg = (typeof JweAlg)[keyof typeof JweAlg] | (string & {});

export const jweAlgSchema: EnumSchema<JweAlg> = s.enumOf<JweAlg>(JweAlg);
