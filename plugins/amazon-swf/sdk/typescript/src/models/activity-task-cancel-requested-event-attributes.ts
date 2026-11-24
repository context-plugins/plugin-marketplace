import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ActivityTaskCancelRequestedEventAttributes = {
  /**
   * The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in
   * the RequestCancelActivityTask decision for this cancellation request. This information can be
   * useful for diagnosing problems by tracing back the chain of events leading up to this event.
   */
  decisionTaskCompletedEventId: number;
  /** The unique ID of the task. */
  activityId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activityTaskCancelRequestedEventAttributesSchema: Schema<ActivityTaskCancelRequestedEventAttributes> =
  s.object<ActivityTaskCancelRequestedEventAttributes>(
    {
      decisionTaskCompletedEventId: s.int(),
      activityId: s.string(),
    },
    { additionalProperties: s.json() },
  );
