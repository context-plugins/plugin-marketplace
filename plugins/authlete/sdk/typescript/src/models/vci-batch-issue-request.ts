import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { credentialIssuanceOrderSchema, type CredentialIssuanceOrder } from "./credential-issuance-order.js";

export type VciBatchIssueRequest = {
  /** The access token that came along with the credential request. */
  accessToken?: string;
  /** The instructions for issuance of credentials and/or transaction IDs. */
  orders?: CredentialIssuanceOrder[];
};

export const vciBatchIssueRequestSchema: Schema<VciBatchIssueRequest> = s.object<VciBatchIssueRequest>({
  accessToken: s.optional(s.string()),
  orders: s.optional(s.array(s.lazy(() => credentialIssuanceOrderSchema))),
});
