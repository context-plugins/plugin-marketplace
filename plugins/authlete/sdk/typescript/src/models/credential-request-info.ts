import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CredentialRequestInfo = {
  /** The identifier of the credential offer. */
  identifier?: string;
  /** The value of the format parameter in the credential request. */
  format?: string;
  /** The identifier of the credential configuration referenced by the credential request. */
  credentialConfigurationId?: string;
  /** The binding key specified by the proof in the credential request. */
  bindingKey?: string;
  /** The binding keys specified by the proofs in the credential request. */
  bindingKeys?: string[];
  /** The details about the credential request. */
  details?: string;
};

export const credentialRequestInfoSchema: Schema<CredentialRequestInfo> = s.object<CredentialRequestInfo>({
  identifier: s.optional(s.string()),
  format: s.optional(s.string()),
  credentialConfigurationId: s.optional(s.string()),
  bindingKey: s.optional(s.string()),
  bindingKeys: s.optional(s.array(s.string())),
  details: s.optional(s.string()),
});
