import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { maxAgeSecondsSchema, type MaxAgeSeconds } from "./unions/max-age-seconds.js";
import { timeoutSecondsSchema, type TimeoutSeconds } from "./unions/timeout-seconds.js";

/** Policy for live fetching web results. */
export type FetchPolicy = {
  /**
   * Maximum age of cached content in seconds to trigger a live fetch. Minimum value 600 seconds (10
   * minutes).
   */
  maxAgeSeconds?: MaxAgeSeconds;
  /** Timeout in seconds for fetching live content if unavailable in cache. */
  timeoutSeconds?: TimeoutSeconds;
  /**
   * If false, fallback to cached content older than max-age if live fetch fails or times out. If
   * true, returns an error instead.
   *
   * @default false
   */
  disableCacheFallback?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fetchPolicySchema: Schema<FetchPolicy> = s.object<FetchPolicy>(
  {
    maxAgeSeconds: s.optional(s.lazy(() => maxAgeSecondsSchema)),
    timeoutSeconds: s.optional(s.lazy(() => timeoutSecondsSchema)),
    disableCacheFallback: s.defaulted(s.boolean(), false),
    _keysMap: {
      maxAgeSeconds: "max_age_seconds",
      timeoutSeconds: "timeout_seconds",
      disableCacheFallback: "disable_cache_fallback",
    },
  },
  { additionalProperties: s.json() },
);
