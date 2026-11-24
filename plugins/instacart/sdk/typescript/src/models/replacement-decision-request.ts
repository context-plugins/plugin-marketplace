import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusInstacartConnectPostCheckoutReplacementsApiSchema,
  type StatusInstacartConnectPostCheckoutReplacementsApi,
} from "./status-instacart-connect-post-checkout-replacements-api.js";

export type ReplacementDecisionRequest = {
  /**
   * The customer's decision on the replacement. APPROVED accepts the replacement. REJECTED declines
   * the replacement and triggers an automatic refund.
   */
  status: StatusInstacartConnectPostCheckoutReplacementsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const replacementDecisionRequestSchema: Schema<ReplacementDecisionRequest> =
  s.object<ReplacementDecisionRequest>(
    {
      status: statusInstacartConnectPostCheckoutReplacementsApiSchema,
    },
    { additionalProperties: s.json() },
  );
