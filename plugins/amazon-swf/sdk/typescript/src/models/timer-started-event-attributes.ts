import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TimerStartedEventAttributes = {
  /** The unique ID of the timer that was started. */
  timerId: string;
  /** Data attached to the event that can be used by the decider in subsequent workflow tasks. */
  control?: string;
  /**
   * The duration of time after which the timer fires. The duration is specified in seconds, an
   * integer greater than or equal to 0.
   */
  startToFireTimeout: string;
  /**
   * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in
   * the StartTimer decision for this activity task. This information can be useful for diagnosing
   * problems by tracing back the chain of events leading up to this event.
   */
  decisionTaskCompletedEventId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const timerStartedEventAttributesSchema: Schema<TimerStartedEventAttributes> =
  s.object<TimerStartedEventAttributes>(
    {
      timerId: s.string(),
      control: s.optional(s.string()),
      startToFireTimeout: s.string(),
      decisionTaskCompletedEventId: s.int(),
    },
    { additionalProperties: s.json() },
  );
