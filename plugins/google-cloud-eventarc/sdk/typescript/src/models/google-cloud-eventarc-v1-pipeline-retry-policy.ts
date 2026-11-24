import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The retry policy configuration for the Pipeline. The pipeline exponentially backs off in case the
 * destination is non responsive or returns a retryable error code. The default semantics are as
 * follows: The backoff starts with a 5 second delay and doubles the delay after each failed attempt
 * (10 seconds, 20 seconds, 40 seconds, etc.). The delay is capped at 60 seconds by default. Please
 * note that if you set the min_retry_delay and max_retry_delay fields to the same value this will
 * make the duration between retries constant.
 */
export type GoogleCloudEventarcV1PipelineRetryPolicy = {
  /**
   * Optional. The maximum amount of seconds to wait between retry attempts. The value must be
   * between 1 and 600. The default value for this field is 60.
   */
  maxRetryDelay?: string;
  /**
   * Optional. The maximum number of delivery attempts for any message. The value must be between 1
   * and 100. The default value for this field is 5.
   */
  maxAttempts?: number;
  /**
   * Optional. The minimum amount of seconds to wait between retry attempts. The value must be
   * between 1 and 600. The default value for this field is 5.
   */
  minRetryDelay?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudEventarcV1PipelineRetryPolicySchema: Schema<GoogleCloudEventarcV1PipelineRetryPolicy> =
  s.object<GoogleCloudEventarcV1PipelineRetryPolicy>(
    {
      maxRetryDelay: s.optional(s.string()),
      maxAttempts: s.optional(s.int()),
      minRetryDelay: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
