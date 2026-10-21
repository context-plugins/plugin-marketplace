import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CredentialIssuanceOrder = {
  /** The identifier of a credential request. */
  requestIdentifier?: string;
  /** The additional payload that will be added into a credential to be issued. */
  credentialPayload?: string;
  /** The flag indicating whether to defer credential issuance. */
  issuanceDeferred?: boolean;
  /** The duration of a credential to be issued. */
  credentialDuration?: number;
  /** The key ID of a private key that should be used for signing a credential to be issued. */
  signingKeyId?: string;
};

export const credentialIssuanceOrderSchema: Schema<CredentialIssuanceOrder> =
  s.object<CredentialIssuanceOrder>({
    requestIdentifier: s.optional(s.string()),
    credentialPayload: s.optional(s.string()),
    issuanceDeferred: s.optional(s.boolean()),
    credentialDuration: s.optional(s.int()),
    signingKeyId: s.optional(s.string()),
  });
