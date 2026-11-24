import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InspectionErrorDetails = {
  /** The array index of the Catch which handled the exception. */
  catchIndex?: number;
  /** The array index of the Retry which handled the exception. */
  retryIndex?: number;
  /** The duration in seconds of the backoff for a retry on a failed state invocation. */
  retryBackoffIntervalSeconds?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const inspectionErrorDetailsSchema: Schema<InspectionErrorDetails> = s.object<InspectionErrorDetails>(
  {
    catchIndex: s.optional(s.int()),
    retryIndex: s.optional(s.int()),
    retryBackoffIntervalSeconds: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
