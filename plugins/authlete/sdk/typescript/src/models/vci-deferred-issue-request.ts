import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { credentialIssuanceOrderSchema, type CredentialIssuanceOrder } from "./credential-issuance-order.js";

export type VciDeferredIssueRequest = {
  order?: CredentialIssuanceOrder;
};

export const vciDeferredIssueRequestSchema: Schema<VciDeferredIssueRequest> =
  s.object<VciDeferredIssueRequest>({
    order: s.optional(s.lazy(() => credentialIssuanceOrderSchema)),
  });
