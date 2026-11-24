import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. The retry policy to use in the Trigger. If unset, event delivery will be retried for up
 * to 24 hours by default: https://cloud.google.com/eventarc/docs/retry-events
 */
export type RetryPolicy2 = {
  /**
   * Optional. The maximum number of delivery attempts for any message. The only valid value is 1.
   */
  maxAttempts?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const retryPolicy2Schema: Schema<RetryPolicy2> = s.object<RetryPolicy2>(
  {
    maxAttempts: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
