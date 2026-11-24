import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StartTimerDecisionAttributes = {
  /**
   * The unique ID of the timer. The specified string must not contain a : (colon), / (slash), |
   * (vertical bar), or any control characters (\u0000-\u001f | \u007f-\u009f). Also, it must not be
   * the literal string arn.
   */
  timerId: string;
  /**
   * The data attached to the event that can be used by the decider in subsequent workflow tasks.
   */
  control?: string;
  /**
   * The duration to wait before firing the timer. The duration is specified in seconds, an integer
   * greater than or equal to 0.
   */
  startToFireTimeout: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startTimerDecisionAttributesSchema: Schema<StartTimerDecisionAttributes> =
  s.object<StartTimerDecisionAttributes>(
    {
      timerId: s.string(),
      control: s.optional(s.string()),
      startToFireTimeout: s.string(),
    },
    { additionalProperties: s.json() },
  );
