import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TimerCanceledEventAttributes = {
  /** The unique ID of the timer that was canceled. */
  timerId: string;
  /**
   * The ID of the TimerStarted event that was recorded when this timer was started. This
   * information can be useful for diagnosing problems by tracing back the chain of events leading
   * up to this event.
   */
  startedEventId: number;
  /**
   * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in
   * the CancelTimer decision to cancel this timer. This information can be useful for diagnosing
   * problems by tracing back the chain of events leading up to this event.
   */
  decisionTaskCompletedEventId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const timerCanceledEventAttributesSchema: Schema<TimerCanceledEventAttributes> =
  s.object<TimerCanceledEventAttributes>(
    {
      timerId: s.string(),
      startedEventId: s.int(),
      decisionTaskCompletedEventId: s.int(),
    },
    { additionalProperties: s.json() },
  );
