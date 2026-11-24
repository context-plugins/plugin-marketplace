import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ActivityTaskFailedEventAttributes = {
  /** The reason provided for the failure. */
  reason?: string;
  /** The details of the failure. */
  details?: string;
  /**
   * The ID of the ActivityTaskScheduled event that was recorded when this activity task was
   * scheduled. This information can be useful for diagnosing problems by tracing back the chain of
   * events leading up to this event.
   */
  scheduledEventId: number;
  /**
   * The ID of the ActivityTaskStarted event recorded when this activity task was started. This
   * information can be useful for diagnosing problems by tracing back the chain of events leading
   * up to this event.
   */
  startedEventId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activityTaskFailedEventAttributesSchema: Schema<ActivityTaskFailedEventAttributes> =
  s.object<ActivityTaskFailedEventAttributes>(
    {
      reason: s.optional(s.string()),
      details: s.optional(s.string()),
      scheduledEventId: s.int(),
      startedEventId: s.int(),
    },
    { additionalProperties: s.json() },
  );
