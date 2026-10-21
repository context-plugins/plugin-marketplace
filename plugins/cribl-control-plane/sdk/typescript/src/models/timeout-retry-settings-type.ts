import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Retry settings for HTTP requests that exceed the request timeout. */
export type TimeoutRetrySettingsType = {
  /** Whether to retry HTTP requests that exceed the request timeout. */
  timeoutRetry: boolean;
  /**
   * How long, in milliseconds, Cribl Stream should wait before initiating backoff. Maximum interval
   * is 600,000 ms (10 minutes).
   */
  initialBackoff?: number;
  /**
   * Base for exponential backoff. A value of 2 (default) means Cribl Stream will retry after 2
   * seconds, then 4 seconds, then 8 seconds, etc.
   */
  backoffRate?: number;
  /**
   * The maximum backoff interval, in milliseconds, Cribl Stream should apply. Default (and minimum)
   * is 10,000 ms (10 seconds); maximum is 180,000 ms (180 seconds).
   */
  maxBackoff?: number;
};

export const timeoutRetrySettingsTypeSchema: Schema<TimeoutRetrySettingsType> =
  s.object<TimeoutRetrySettingsType>({
    timeoutRetry: s.boolean(),
    initialBackoff: s.optional(s.float64()),
    backoffRate: s.optional(s.float64()),
    maxBackoff: s.optional(s.float64()),
  });
