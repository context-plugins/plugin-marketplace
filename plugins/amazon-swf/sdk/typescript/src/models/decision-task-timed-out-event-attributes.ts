import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { timeoutType1Schema, type TimeoutType1 } from "./timeout-type1.js";

export type DecisionTaskTimedOutEventAttributes = {
  /** The type of timeout that expired before the decision task could be completed. */
  timeoutType: TimeoutType1;
  /**
   * The ID of the DecisionTaskScheduled event that was recorded when this decision task was
   * scheduled. This information can be useful for diagnosing problems by tracing back the chain of
   * events leading up to this event.
   */
  scheduledEventId: number;
  /**
   * The ID of the DecisionTaskStarted event recorded when this decision task was started. This
   * information can be useful for diagnosing problems by tracing back the chain of events leading
   * up to this event.
   */
  startedEventId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const decisionTaskTimedOutEventAttributesSchema: Schema<DecisionTaskTimedOutEventAttributes> =
  s.object<DecisionTaskTimedOutEventAttributes>(
    {
      timeoutType: timeoutType1Schema,
      scheduledEventId: s.int(),
      startedEventId: s.int(),
    },
    { additionalProperties: s.json() },
  );
