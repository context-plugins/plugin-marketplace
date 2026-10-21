import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type JoseVerifyRequest = {
  /** A JOSE object. */
  jose: string;
  /** Mandatory claims that are required to be included in the JOSE object. */
  mandatoryClaims?: string[];
  /** Allowable clock skew in seconds. */
  clockSkew?: number;
  /**
   * The identifier of the client application whose keys are required for verification of the JOSE
   * object.
   */
  clientIdentifier?: string;
  /**
   * The flag which indicates whether the signature of the JOSE object has been signed by a client
   * application with the client's private key or a shared symmetric key.
   */
  signedByClient?: boolean;
};

export const joseVerifyRequestSchema: Schema<JoseVerifyRequest> = s.object<JoseVerifyRequest>({
  jose: s.string(),
  mandatoryClaims: s.optional(s.array(s.string())),
  clockSkew: s.optional(s.int()),
  clientIdentifier: s.optional(s.string()),
  signedByClient: s.optional(s.boolean()),
});
