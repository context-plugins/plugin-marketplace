import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Holds information about a key managed in an HSM (Hardware Security Module) */
export type Hsk = {
  /** The key type (EC or RSA) */
  kty?: string;
  /**
   * Get the use of the key on the HSM. When the key use is "sig" (signature), the private key on
   * the HSM is used to sign data and the corresponding public key is used to verify the signature.
   * When the key use is "enc" (encryption), the private key on the HSM is used to decrypt encrypted
   * data which have been encrypted with the corresponding public key
   */
  use?: string;
  /** Key ID for the key on the HSM. */
  kid?: string;
  /**
   * The name of the HSM. The identifier for the HSM that sits behind the Authlete server. For
   * example, "google".
   */
  hsmName?: string;
  /**
   * The handle for the key on the HSM. A handle is a base64url-encoded 256-bit random value (43
   * letters) which is assigned by Authlete on the call of the /api/hsk/create API
   */
  handle?: string;
  /** The public key that corresponds to the key on the HSM. */
  publicKey?: string;
  /**
   * The algorithm of the key on the HSM. When the key use is `"sig"`, the algorithm represents a
   * signing algorithm such as `"ES256"`. When the key use is `"enc"`, the algorithm represents an
   * encryption algorithm such as `"RSA-OAEP-256"`.
   */
  alg?: string;
};

export const hskSchema: Schema<Hsk> = s.object<Hsk>({
  kty: s.optional(s.string()),
  use: s.optional(s.string()),
  kid: s.optional(s.string()),
  hsmName: s.optional(s.string()),
  handle: s.optional(s.string()),
  publicKey: s.optional(s.string()),
  alg: s.optional(s.string()),
});
