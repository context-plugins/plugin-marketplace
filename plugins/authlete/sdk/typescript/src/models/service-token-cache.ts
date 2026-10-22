import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Cache statistics for service tokens. */
export type ServiceTokenCache = {
  /** The number of cache hits. */
  hitCount?: number;
  /** The number of cache misses. */
  missCount?: number;
  /** The number of successful loads. */
  loadSuccessCount?: number;
  /** The number of failed loads. */
  loadFailureCount?: number;
  /** The total load time in nanoseconds. */
  totalLoadTime?: number;
  /** The number of evictions. */
  evictionCount?: number;
  /** The weight of evicted entries. */
  evictionWeight?: number;
};

export const serviceTokenCacheSchema: Schema<ServiceTokenCache> = s.object<ServiceTokenCache>({
  hitCount: s.optional(s.int()),
  missCount: s.optional(s.int()),
  loadSuccessCount: s.optional(s.int()),
  loadFailureCount: s.optional(s.int()),
  totalLoadTime: s.optional(s.int()),
  evictionCount: s.optional(s.int()),
  evictionWeight: s.optional(s.int()),
});
