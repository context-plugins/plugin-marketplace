import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { credentialIssuanceOrderSchema, type CredentialIssuanceOrder } from "./credential-issuance-order.js";

export type VciSingleIssueRequest = {
  /** The access token that came along with the credential request. */
  accessToken?: string;
  order?: CredentialIssuanceOrder;
  /**
   * Set to `true` to signal that the credential issuer is declining to issue the requested
   * credential. When set, the response will contain `"error":"credential_request_denied"` and the
   * action in the response will be `BAD_REQUEST`.
   */
  denied?: boolean;
  /** The minimum polling interval in seconds for deferred credential issuance. */
  interval?: number;
};

export const vciSingleIssueRequestSchema: Schema<VciSingleIssueRequest> = s.object<VciSingleIssueRequest>({
  accessToken: s.optional(s.string()),
  order: s.optional(s.lazy(() => credentialIssuanceOrderSchema)),
  denied: s.optional(s.boolean()),
  interval: s.optional(s.int()),
});
