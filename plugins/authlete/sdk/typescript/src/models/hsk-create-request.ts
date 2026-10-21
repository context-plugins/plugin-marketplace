import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HskCreateRequest = {
  /** The key type (EC or RSA) */
  kty?: string;
  /**
   * The key on the HSM. When the key use is "sig" (signature), the private key on the HSM is used
   * to sign data and the corresponding public key is used to verify the signature. When the key use
   * is "enc" (encryption), the private key on the HSM is used to decrypt encrypted data which have
   * been encrypted with the corresponding public key
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
   * The algorithm of the key on the HSM. When the key use is `"sig"`, the algorithm represents a
   * signing algorithm such as `"ES256"`. When the key use is `"enc"`, the algorithm represents an
   * encryption algorithm such as `"RSA-OAEP-256"`.
   *
   * It is rare that HSMs support all the algorithms listed in [RFC 7518 JSON Web Algorithms
   * (JWA)](https://www.rfc-editor.org/rfc/rfc7518.html). When the specified algorithm is not
   * supported by the HSM, the request to the `/hsk/create` API fails.
   */
  alg?: string;
};

export const hskCreateRequestSchema: Schema<HskCreateRequest> = s.object<HskCreateRequest>({
  kty: s.optional(s.string()),
  use: s.optional(s.string()),
  kid: s.optional(s.string()),
  hsmName: s.optional(s.string()),
  alg: s.optional(s.string()),
});
