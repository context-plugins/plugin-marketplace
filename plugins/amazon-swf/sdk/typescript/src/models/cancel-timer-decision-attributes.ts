import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CancelTimerDecisionAttributes = {
  /** The unique ID of the timer to cancel. */
  timerId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cancelTimerDecisionAttributesSchema: Schema<CancelTimerDecisionAttributes> =
  s.object<CancelTimerDecisionAttributes>(
    {
      timerId: s.string(),
    },
    { additionalProperties: s.json() },
  );
