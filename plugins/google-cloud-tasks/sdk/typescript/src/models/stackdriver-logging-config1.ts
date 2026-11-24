import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Configuration options for writing logs to [Stackdriver
 * Logging](https://cloud.google.com/logging/docs/). If this field is unset, then no logs are
 * written.
 */
export type StackdriverLoggingConfig1 = {
  /**
   * Specifies the fraction of operations to write to [Stackdriver
   * Logging](https://cloud.google.com/logging/docs/). This field may contain any value between 0.0
   * and 1.0, inclusive. 0.0 is the default and means that no operations are logged.
   */
  samplingRatio?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stackdriverLoggingConfig1Schema: Schema<StackdriverLoggingConfig1> =
  s.object<StackdriverLoggingConfig1>(
    {
      samplingRatio: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
