import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ActivityTaskStartedEventAttributes = {
  /**
   * Identity of the worker that was assigned this task. This aids diagnostics when problems arise.
   * The form of this identity is user defined.
   */
  identity?: string;
  /**
   * The ID of the ActivityTaskScheduled event that was recorded when this activity task was
   * scheduled. This information can be useful for diagnosing problems by tracing back the chain of
   * events leading up to this event.
   */
  scheduledEventId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activityTaskStartedEventAttributesSchema: Schema<ActivityTaskStartedEventAttributes> =
  s.object<ActivityTaskStartedEventAttributes>(
    {
      identity: s.optional(s.string()),
      scheduledEventId: s.int(),
    },
    { additionalProperties: s.json() },
  );
