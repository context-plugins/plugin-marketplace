import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { timeoutTypeSchema, type TimeoutType } from "./timeout-type.js";

export type ActivityTaskTimedOutEventAttributes = {
  /** The type of the timeout that caused this event. */
  timeoutType: TimeoutType;
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
   * Contains the content of the details parameter for the last call made by the activity to
   * RecordActivityTaskHeartbeat.
   */
  details?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activityTaskTimedOutEventAttributesSchema: Schema<ActivityTaskTimedOutEventAttributes> =
  s.object<ActivityTaskTimedOutEventAttributes>(
    {
      timeoutType: timeoutTypeSchema,
      scheduledEventId: s.int(),
      startedEventId: s.int(),
      details: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
