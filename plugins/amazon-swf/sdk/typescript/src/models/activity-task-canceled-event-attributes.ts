import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ActivityTaskCanceledEventAttributes = {
  /** Details of the cancellation. */
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
  /**
   * If set, contains the ID of the last ActivityTaskCancelRequested event recorded for this
   * activity task. This information can be useful for diagnosing problems by tracing back the chain
   * of events leading up to this event.
   */
  latestCancelRequestedEventId?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activityTaskCanceledEventAttributesSchema: Schema<ActivityTaskCanceledEventAttributes> =
  s.object<ActivityTaskCanceledEventAttributes>(
    {
      details: s.optional(s.string()),
      scheduledEventId: s.int(),
      startedEventId: s.int(),
      latestCancelRequestedEventId: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
