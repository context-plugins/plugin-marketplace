import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Current state for a particular quota group. */
export type QuotaStatus = {
  /** Quota remaining after this request. */
  remaining?: number;
  /** Quota consumed by this request. */
  consumed?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const quotaStatusSchema: Schema<QuotaStatus> = s.object<QuotaStatus>(
  {
    remaining: s.optional(s.int()),
    consumed: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
