import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { activityTypeSchema, type ActivityType } from "./activity-type.js";
import { taskListSchema, type TaskList } from "./task-list.js";

export type ScheduleActivityTaskDecisionAttributes = {
  activityType: ActivityType;
  /**
   * The activityId of the activity task. The specified string must not contain a : (colon), /
   * (slash), | (vertical bar), or any control characters (\u0000-\u001f | \u007f-\u009f). Also, it
   * must not be the literal string arn.
   */
  activityId: string;
  /**
   * Data attached to the event that can be used by the decider in subsequent workflow tasks. This
   * data isn't sent to the activity.
   */
  control?: string;
  /** The input provided to the activity task. */
  input?: string;
  /**
   * The maximum duration for this activity task. The duration is specified in seconds, an integer
   * greater than or equal to 0. You can use NONE to specify unlimited duration. A schedule-to-close
   * timeout for this activity task must be specified either as a default for the activity type or
   * through this field. If neither this field is set nor a default schedule-to-close timeout was
   * specified at registration time then a fault is returned.
   */
  scheduleToCloseTimeout?: string;
  taskList?: TaskList;
  /**
   * If set, specifies the priority with which the activity task is to be assigned to a worker. This
   * overrides the defaultTaskPriority specified when registering the activity type using
   * RegisterActivityType. Valid values are integers that range from Java's Integer.MIN_VALUE
   * (-2147483648) to Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority. For
   * more information about setting task priority, see Setting Task Priority in the Amazon SWF
   * Developer Guide.
   */
  taskPriority?: string;
  /**
   * If set, specifies the maximum duration the activity task can wait to be assigned to a worker.
   * This overrides the default schedule-to-start timeout specified when registering the activity
   * type using RegisterActivityType. The duration is specified in seconds, an integer greater than
   * or equal to 0. You can use NONE to specify unlimited duration. A schedule-to-start timeout for
   * this activity task must be specified either as a default for the activity type or through this
   * field. If neither this field is set nor a default schedule-to-start timeout was specified at
   * registration time then a fault is r
   */
  scheduleToStartTimeout?: string;
  /**
   * If set, specifies the maximum duration a worker may take to process this activity task. This
   * overrides the default start-to-close timeout specified when registering the activity type using
   * RegisterActivityType. The duration is specified in seconds, an integer greater than or equal to
   * 0. You can use NONE to specify unlimited duration. A start-to-close timeout for this activity
   * task must be specified either as a default for the activity type or through this field. If
   * neither this field is set nor a default start-to-close timeout was specified at registration
   * time then a fault is returned.
   */
  startToCloseTimeout?: string;
  /**
   * If set, specifies the maximum time before which a worker processing a task of this type must
   * report progress by calling RecordActivityTaskHeartbeat. If the timeout is exceeded, the
   * activity task is automatically timed out. If the worker subsequently attempts to record a
   * heartbeat or returns a result, it is ignored. This overrides the default heartbeat timeout
   * specified when registering the activity type using RegisterActivityType. The duration is
   * specified in seconds, an integer greater than or equal to 0. You can use NONE to specify
   * unlimited duration.
   */
  heartbeatTimeout?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scheduleActivityTaskDecisionAttributesSchema: Schema<ScheduleActivityTaskDecisionAttributes> =
  s.object<ScheduleActivityTaskDecisionAttributes>(
    {
      activityType: activityTypeSchema,
      activityId: s.string(),
      control: s.optional(s.string()),
      input: s.optional(s.string()),
      scheduleToCloseTimeout: s.optional(s.string()),
      taskList: s.optional(s.lazy(() => taskListSchema)),
      taskPriority: s.optional(s.string()),
      scheduleToStartTimeout: s.optional(s.string()),
      startToCloseTimeout: s.optional(s.string()),
      heartbeatTimeout: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
