import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { timeoutType2Schema, type TimeoutType2 } from "./timeout-type2.js";

export type LambdaFunctionTimedOutEventAttributes = {
  /**
   * The ID of the LambdaFunctionScheduled event that was recorded when this activity task was
   * scheduled. To help diagnose issues, use this information to trace back the chain of events
   * leading up to this event.
   */
  scheduledEventId: number;
  /**
   * The ID of the ActivityTaskStarted event that was recorded when this activity task started. To
   * help diagnose issues, use this information to trace back the chain of events leading up to this
   * event.
   */
  startedEventId: number;
  /** The type of the timeout that caused this event. */
  timeoutType?: TimeoutType2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lambdaFunctionTimedOutEventAttributesSchema: Schema<LambdaFunctionTimedOutEventAttributes> =
  s.object<LambdaFunctionTimedOutEventAttributes>(
    {
      scheduledEventId: s.int(),
      startedEventId: s.int(),
      timeoutType: s.optional(s.lazy(() => timeoutType2Schema)),
    },
    { additionalProperties: s.json() },
  );
