import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. The retry policy to use in the pipeline. */
export type GoogleCloudEventarcV1PipelineRetryPolicy2 = {
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

export const googleCloudEventarcV1PipelineRetryPolicy2Schema: Schema<GoogleCloudEventarcV1PipelineRetryPolicy2> =
  s.object<GoogleCloudEventarcV1PipelineRetryPolicy2>(
    {
      maxRetryDelay: s.optional(s.string()),
      maxAttempts: s.optional(s.int()),
      minRetryDelay: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
