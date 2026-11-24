import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TimerFiredEventAttributes = {
  /** The unique ID of the timer that fired. */
  timerId: string;
  /**
   * The ID of the TimerStarted event that was recorded when this timer was started. This
   * information can be useful for diagnosing problems by tracing back the chain of events leading
   * up to this event.
   */
  startedEventId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const timerFiredEventAttributesSchema: Schema<TimerFiredEventAttributes> =
  s.object<TimerFiredEventAttributes>(
    {
      timerId: s.string(),
      startedEventId: s.int(),
    },
    { additionalProperties: s.json() },
  );
