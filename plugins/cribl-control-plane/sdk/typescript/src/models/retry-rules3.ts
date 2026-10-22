import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { retryTypeSchema, type RetryType } from "./retry-type.js";

/** HTTP retry behavior for failed collection requests. */
export type RetryRules3 = {
  /** The algorithm to use when performing HTTP retries */
  type: RetryType;
  /**
   * Time interval between failed request and first retry (kickoff). Maximum allowed value is 20,000
   * ms (1/3 minute).
   */
  interval?: number;
  /** The maximum number of times to retry a failed HTTP request */
  limit?: number;
  /**
   * Base for exponential backoff, e.g., base 2 means that retries will occur after 2, then 4, then
   * 8 seconds, and so on
   */
  multiplier?: number;
  /**
   * List of HTTP codes that trigger a retry. Leave empty to use the default list of 429, 500, and
   * 503.
   */
  codes?: number[];
  /**
   * Honor any Retry-After header that specifies a delay (in seconds) or a timestamp after which to
   * retry the request. The delay is limited to 20 seconds, even if the Retry-After header specifies
   * a longer delay. When disabled, all Retry-After headers are ignored.
   */
  enableHeader?: boolean;
  /** Make a single retry attempt when a connection timeout (ETIMEDOUT) error occurs */
  retryConnectTimeout?: boolean;
  /** Retry request when a connection reset (ECONNRESET) error occurs */
  retryConnectReset?: boolean;
};

export const retryRules3Schema: Schema<RetryRules3> = s.object<RetryRules3>({
  type: retryTypeSchema,
  interval: s.optional(s.float64()),
  limit: s.optional(s.float64()),
  multiplier: s.optional(s.float64()),
  codes: s.optional(s.array(s.float64())),
  enableHeader: s.optional(s.boolean()),
  retryConnectTimeout: s.optional(s.boolean()),
  retryConnectReset: s.optional(s.boolean()),
});
