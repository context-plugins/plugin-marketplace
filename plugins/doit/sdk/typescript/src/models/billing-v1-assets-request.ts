import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BillingV1AssetsRequest = {
  quantity?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const billingV1AssetsRequestSchema: Schema<BillingV1AssetsRequest> = s.object<BillingV1AssetsRequest>(
  {
    quantity: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
