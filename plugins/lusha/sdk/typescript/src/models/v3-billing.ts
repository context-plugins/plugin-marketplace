import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Credit usage summary for a V3 API request */
export type V3Billing = {
  /** Total credits charged for this request */
  creditsCharged?: number;
  /** Number of successful results returned */
  resultsReturned?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v3BillingSchema: Schema<V3Billing> = s.object<V3Billing>(
  {
    creditsCharged: s.optional(s.int()),
    resultsReturned: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
