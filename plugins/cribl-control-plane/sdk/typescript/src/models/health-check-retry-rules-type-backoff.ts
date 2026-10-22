import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  typeOptionsHealthCheckRetryRulesTypeBackoffSchema,
  type TypeOptionsHealthCheckRetryRulesTypeBackoff,
} from "./type-options-health-check-retry-rules-type-backoff.js";

export type HealthCheckRetryRulesTypeBackoff = {
  /** Resource type identifier. */
  type?: TypeOptionsHealthCheckRetryRulesTypeBackoff;
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
   * List of HTTP codes that trigger a retry. Leave empty to use the default list of 429 and 503.
   */
  codes?: number[];
  /**
   * Honor any Retry-After header that specifies a delay (in seconds) or a timestamp after which to
   * retry the request. The delay is limited to 20 seconds, even if the Retry-After header specifies
   * a longer delay. When disabled, all Retry-After headers are ignored.
   */
  enableHeader?: boolean;
};

export const healthCheckRetryRulesTypeBackoffSchema: Schema<HealthCheckRetryRulesTypeBackoff> =
  s.object<HealthCheckRetryRulesTypeBackoff>({
    type: s.optional(s.lazy(() => typeOptionsHealthCheckRetryRulesTypeBackoffSchema)),
    interval: s.optional(s.float64()),
    limit: s.optional(s.float64()),
    multiplier: s.optional(s.float64()),
    codes: s.optional(s.array(s.float64())),
    enableHeader: s.optional(s.boolean()),
  });
