import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  typeOptionsHealthCheckRetryRulesTypeStaticSchema,
  type TypeOptionsHealthCheckRetryRulesTypeStatic,
} from "./type-options-health-check-retry-rules-type-static.js";

export type SplunkRetryRulesTypeStatic = {
  /** Resource type identifier. */
  type?: TypeOptionsHealthCheckRetryRulesTypeStatic;
  /** Time interval between retries. Maximum allowed value is 20,000 ms (1/3 minute). */
  interval?: number;
  /** The maximum number of times to retry a failed HTTP request */
  limit?: number;
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
  /** Make a single retry attempt when a connection timeout (ETIMEDOUT) error occurs */
  retryConnectTimeout?: boolean;
  /** Retry request when a connection reset error (ECONNRESET) error occurs */
  retryConnectReset?: boolean;
};

export const splunkRetryRulesTypeStaticSchema: Schema<SplunkRetryRulesTypeStatic> =
  s.object<SplunkRetryRulesTypeStatic>({
    type: s.optional(s.lazy(() => typeOptionsHealthCheckRetryRulesTypeStaticSchema)),
    interval: s.optional(s.float64()),
    limit: s.optional(s.float64()),
    codes: s.optional(s.array(s.float64())),
    enableHeader: s.optional(s.boolean()),
    retryConnectTimeout: s.optional(s.boolean()),
    retryConnectReset: s.optional(s.boolean()),
  });
