import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LambdaFunctionFailedEventAttributes = {
  /**
   * The ID of the LambdaFunctionScheduled event that was recorded when this activity task was
   * scheduled. To help diagnose issues, use this information to trace back the chain of events
   * leading up to this event.
   */
  scheduledEventId: number;
  /**
   * The ID of the LambdaFunctionStarted event recorded when this activity task started. To help
   * diagnose issues, use this information to trace back the chain of events leading up to this
   * event.
   */
  startedEventId: number;
  /** The reason provided for the failure. */
  reason?: string;
  /** The details of the failure. */
  details?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lambdaFunctionFailedEventAttributesSchema: Schema<LambdaFunctionFailedEventAttributes> =
  s.object<LambdaFunctionFailedEventAttributes>(
    {
      scheduledEventId: s.int(),
      startedEventId: s.int(),
      reason: s.optional(s.string()),
      details: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
