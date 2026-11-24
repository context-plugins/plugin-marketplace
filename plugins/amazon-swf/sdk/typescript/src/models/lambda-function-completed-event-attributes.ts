import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LambdaFunctionCompletedEventAttributes = {
  /**
   * The ID of the LambdaFunctionScheduled event that was recorded when this Lambda task was
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
  /** The results of the Lambda task. */
  result?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lambdaFunctionCompletedEventAttributesSchema: Schema<LambdaFunctionCompletedEventAttributes> =
  s.object<LambdaFunctionCompletedEventAttributes>(
    {
      scheduledEventId: s.int(),
      startedEventId: s.int(),
      result: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
