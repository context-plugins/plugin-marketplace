import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Cache revalidation usage metrics for the organization. */
export type CacheUsage = {
  /** Number of cache revalidation requests used in the current period. */
  used?: number;
  /** Maximum number of cache revalidation requests allowed per period. */
  limit?: number;
  /** Start of the current usage period. */
  periodStart?: Date;
  /** End of the current usage period. */
  periodEnd?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cacheUsageSchema: Schema<CacheUsage> = s.object<CacheUsage>(
  {
    used: s.optional(s.int()),
    limit: s.optional(s.int()),
    periodStart: s.optional(s.dateTime()),
    periodEnd: s.optional(s.dateTime()),
    _keysMap: {
      periodStart: "period_start",
      periodEnd: "period_end",
    },
  },
  { additionalProperties: s.json() },
);
