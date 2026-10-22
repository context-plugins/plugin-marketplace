import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Retry settings for failed file uploads. */
export type RetrySettingsType = {
  /** Apply exponential backoff with jitter when file uploads fail repeatedly. */
  enabled?: boolean;
  /**
   * Initial delay before first retry attempt. Valid range: 1s-5min (1000-300000ms). Values outside
   * this range will be clamped to the nearest valid value.
   */
  initialBackoffMs?: number;
  /**
   * Multiplier applied to backoff delay after each retry. Valid range: 1-10. Values outside this
   * range will be clamped to the nearest valid value.
   */
  backoffMultiplier?: number;
  /**
   * Maximum delay between retry attempts. Valid range: 1s-10min (1000-600000ms). Values outside
   * this range will be clamped to the nearest valid value.
   */
  maxBackoffMs?: number;
  /**
   * Random jitter percentage added to backoff delay to prevent thundering herd. Valid range: 0-100.
   * Values outside this range will be clamped to the nearest valid value.
   */
  jitterPercent?: number;
};

export const retrySettingsTypeSchema: Schema<RetrySettingsType> = s.object<RetrySettingsType>({
  enabled: s.optional(s.boolean()),
  initialBackoffMs: s.optional(s.float64()),
  backoffMultiplier: s.optional(s.float64()),
  maxBackoffMs: s.optional(s.float64()),
  jitterPercent: s.optional(s.float64()),
});
