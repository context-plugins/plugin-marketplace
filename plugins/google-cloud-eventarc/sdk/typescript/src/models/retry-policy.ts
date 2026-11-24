import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The retry policy configuration for the Trigger. Can only be set with Cloud Run destinations. */
export type RetryPolicy = {
  /**
   * Optional. The maximum number of delivery attempts for any message. The only valid value is 1.
   */
  maxAttempts?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const retryPolicySchema: Schema<RetryPolicy> = s.object<RetryPolicy>(
  {
    maxAttempts: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
