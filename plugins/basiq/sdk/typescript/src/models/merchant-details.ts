import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MerchantDetails = {
  /** The name of the merchant. */
  merchantName?: string;
  /** Unique identifier for the merchant. */
  merchantId?: string;
  /** Confidence score of the match. */
  matchScore?: number;
  /** The suburb of the merchant location, or null if not available. */
  suburb?: string | null;
  /** The state of the merchant location. */
  state?: string;
  /** The country of the merchant location. */
  country?: string;
  /** The Australian Business Number (ABN) of the merchant. */
  abn?: string;
  /** The type of the merchant entity. */
  entityType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const merchantDetailsSchema: Schema<MerchantDetails> = s.object<MerchantDetails>(
  {
    merchantName: s.optional(s.string()),
    merchantId: s.optional(s.string()),
    matchScore: s.optional(s.float64()),
    suburb: s.optionalNullable(s.string()),
    state: s.optional(s.string()),
    country: s.optional(s.string()),
    abn: s.optional(s.string()),
    entityType: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
