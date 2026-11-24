import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Standard Analytics Properties can send up to 10 concurrent requests; Analytics 360 Properties can
 * use up to 50 concurrent requests.
 */
export type QuotaStatus3 = {
  /** Quota remaining after this request. */
  remaining?: number;
  /** Quota consumed by this request. */
  consumed?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const quotaStatus3Schema: Schema<QuotaStatus3> = s.object<QuotaStatus3>(
  {
    remaining: s.optional(s.int()),
    consumed: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
