import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  replacementStatusInstacartConnectPostCheckoutReplacementsApiSchema,
  type ReplacementStatusInstacartConnectPostCheckoutReplacementsApi,
} from "./replacement-status-instacart-connect-post-checkout-replacements-api.js";

export type ReplacementResponse = {
  /** The order item identifier. */
  id?: string;
  /** The updated replacement status. */
  replacementStatus?: ReplacementStatusInstacartConnectPostCheckoutReplacementsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const replacementResponseSchema: Schema<ReplacementResponse> = s.object<ReplacementResponse>(
  {
    id: s.optional(s.string()),
    replacementStatus: s.optional(
      s.lazy(() => replacementStatusInstacartConnectPostCheckoutReplacementsApiSchema),
    ),
    _keysMap: {
      replacementStatus: "replacement_status",
    },
  },
  { additionalProperties: s.json() },
);
