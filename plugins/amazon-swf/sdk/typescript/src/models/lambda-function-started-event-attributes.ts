import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LambdaFunctionStartedEventAttributes = {
  /**
   * The ID of the LambdaFunctionScheduled event that was recorded when this activity task was
   * scheduled. To help diagnose issues, use this information to trace back the chain of events
   * leading up to this event.
   */
  scheduledEventId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lambdaFunctionStartedEventAttributesSchema: Schema<LambdaFunctionStartedEventAttributes> =
  s.object<LambdaFunctionStartedEventAttributes>(
    {
      scheduledEventId: s.int(),
    },
    { additionalProperties: s.json() },
  );
