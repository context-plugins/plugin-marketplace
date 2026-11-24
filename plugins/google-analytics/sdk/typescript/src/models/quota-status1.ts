import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Analytics Properties can send up to 120 requests with potentially thresholded dimensions per
 * hour. In a batch request, each report request is individually counted for this quota if the
 * request contains potentially thresholded dimensions.
 */
export type QuotaStatus1 = {
  /** Quota remaining after this request. */
  remaining?: number;
  /** Quota consumed by this request. */
  consumed?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const quotaStatus1Schema: Schema<QuotaStatus1> = s.object<QuotaStatus1>(
  {
    remaining: s.optional(s.int()),
    consumed: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
