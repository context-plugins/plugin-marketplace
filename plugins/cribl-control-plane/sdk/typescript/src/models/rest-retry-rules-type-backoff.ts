import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  typeOptionsHealthCheckRetryRulesTypeBackoffSchema,
  type TypeOptionsHealthCheckRetryRulesTypeBackoff,
} from "./type-options-health-check-retry-rules-type-backoff.js";

export type RestRetryRulesTypeBackoff = {
  /** Resource type identifier. */
  type?: TypeOptionsHealthCheckRetryRulesTypeBackoff;
  /** Time interval between a failed request and the first retry */
  interval?: number;
  /** Maximum number of times to retry a failed HTTP request */
  limit?: number;
  /**
   * Base for exponential backoff. Example: base 2 means that retries will occur after 2, then 4,
   * then 8 seconds, and so on.
   */
  multiplier?: number;
  /** Longest interval between retries (ms) */
  maxIntervalMs?: number;
  /**
   * List of HTTP codes that trigger a retry. Leave empty to use the default list of 429 and 503.
   */
  codes?: number[];
  /**
   * Honor any Retry-After header that specifies a delay (in seconds) or a timestamp after which to
   * retry the request. The delay is limited to the `Longest interval between retries (ms)` value,
   * even if the Retry-After header specifies a longer delay. When disabled, all Retry-After headers
   * are ignored.
   */
  enableHeader?: boolean;
  /** Make a single retry attempt when a connection timeout (ETIMEDOUT) error occurs */
  retryConnectTimeout?: boolean;
  /** Retry request when a connection reset (ECONNRESET) error occurs */
  retryConnectReset?: boolean;
  /** Retry-After header name */
  retryHeaderName?: string;
};

export const restRetryRulesTypeBackoffSchema: Schema<RestRetryRulesTypeBackoff> =
  s.object<RestRetryRulesTypeBackoff>({
    type: s.optional(s.lazy(() => typeOptionsHealthCheckRetryRulesTypeBackoffSchema)),
    interval: s.optional(s.float64()),
    limit: s.optional(s.float64()),
    multiplier: s.optional(s.float64()),
    maxIntervalMs: s.optional(s.float64()),
    codes: s.optional(s.array(s.float64())),
    enableHeader: s.optional(s.boolean()),
    retryConnectTimeout: s.optional(s.boolean()),
    retryConnectReset: s.optional(s.boolean()),
    retryHeaderName: s.optional(s.string()),
  });
