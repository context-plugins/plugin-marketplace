import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DecisionTaskStartedEventAttributes = {
  /**
   * Identity of the decider making the request. This enables diagnostic tracing when problems
   * arise. The form of this identity is user defined.
   */
  identity?: string;
  /**
   * The ID of the DecisionTaskScheduled event that was recorded when this decision task was
   * scheduled. This information can be useful for diagnosing problems by tracing back the chain of
   * events leading up to this event.
   */
  scheduledEventId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const decisionTaskStartedEventAttributesSchema: Schema<DecisionTaskStartedEventAttributes> =
  s.object<DecisionTaskStartedEventAttributes>(
    {
      identity: s.optional(s.string()),
      scheduledEventId: s.int(),
    },
    { additionalProperties: s.json() },
  );
