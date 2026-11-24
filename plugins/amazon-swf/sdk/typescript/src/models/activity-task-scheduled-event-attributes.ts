import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { activityTypeSchema, type ActivityType } from "./activity-type.js";
import { taskListSchema, type TaskList } from "./task-list.js";

export type ActivityTaskScheduledEventAttributes = {
  activityType: ActivityType;
  /** The unique ID of the activity task. */
  activityId: string;
  /** The input provided to the activity task. */
  input?: string;
  /**
   * Data attached to the event that can be used by the decider in subsequent workflow tasks. This
   * data isn't sent to the activity.
   */
  control?: string;
  /** The maximum amount of time the activity task can wait to be assigned to a worker. */
  scheduleToStartTimeout?: string;
  /** The maximum amount of time for this activity task. */
  scheduleToCloseTimeout?: string;
  /** The maximum amount of time a worker may take to process the activity task. */
  startToCloseTimeout?: string;
  taskList: TaskList;
  /**
   * The priority to assign to the scheduled activity task. If set, this overrides any default
   * priority value that was assigned when the activity type was registered. Valid values are
   * integers that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE
   * (2147483647). Higher numbers indicate higher priority. For more information about setting task
   * priority, see Setting Task Priority in the Amazon SWF Developer Guide.
   */
  taskPriority?: string;
  /**
   * The ID of the DecisionTaskCompleted event corresponding to the decision that resulted in the
   * scheduling of this activity task. This information can be useful for diagnosing problems by
   * tracing back the chain of events leading up to this event.
   */
  decisionTaskCompletedEventId: number;
  /**
   * The maximum time before which the worker processing this task must report progress by calling
   * RecordActivityTaskHeartbeat. If the timeout is exceeded, the activity task is automatically
   * timed out. If the worker subsequently attempts to record a heartbeat or return a result, it is
   * ignored.
   */
  heartbeatTimeout?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activityTaskScheduledEventAttributesSchema: Schema<ActivityTaskScheduledEventAttributes> =
  s.object<ActivityTaskScheduledEventAttributes>(
    {
      activityType: activityTypeSchema,
      activityId: s.string(),
      input: s.optional(s.string()),
      control: s.optional(s.string()),
      scheduleToStartTimeout: s.optional(s.string()),
      scheduleToCloseTimeout: s.optional(s.string()),
      startToCloseTimeout: s.optional(s.string()),
      taskList: taskListSchema,
      taskPriority: s.optional(s.string()),
      decisionTaskCompletedEventId: s.int(),
      heartbeatTimeout: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
