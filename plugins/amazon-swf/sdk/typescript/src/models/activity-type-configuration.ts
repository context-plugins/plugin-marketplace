import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskListSchema, type TaskList } from "./task-list.js";

export type ActivityTypeConfiguration = {
  /**
   * The default maximum duration for tasks of an activity type specified when registering the
   * activity type. You can override this default when scheduling a task through the
   * ScheduleActivityTask Decision. The duration is specified in seconds, an integer greater than or
   * equal to 0. You can use NONE to specify unlimited duration.
   */
  defaultTaskStartToCloseTimeout?: string;
  /**
   * The default maximum time, in seconds, before which a worker processing a task must report
   * progress by calling RecordActivityTaskHeartbeat. You can specify this value only when
   * registering an activity type. The registered default value can be overridden when you schedule
   * a task through the ScheduleActivityTask Decision. If the activity worker subsequently attempts
   * to record a heartbeat or returns a result, the activity worker receives an UnknownResource
   * fault. In this case, Amazon SWF no longer considers the activity task to be valid; the activity
   * worker should clean up the activity task. The d
   */
  defaultTaskHeartbeatTimeout?: string;
  defaultTaskList?: TaskList;
  /**
   * The default task priority for tasks of this activity type, specified at registration. If not
   * set, then 0 is used as the default priority. This default can be overridden when scheduling an
   * activity task. Valid values are integers that range from Java's Integer.MIN_VALUE (-2147483648)
   * to Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority. For more
   * information about setting task priority, see Setting Task Priority in the Amazon SWF Developer
   * Guide.
   */
  defaultTaskPriority?: string;
  /**
   * The default maximum duration, specified when registering the activity type, that a task of an
   * activity type can wait before being assigned to a worker. You can override this default when
   * scheduling a task through the ScheduleActivityTask Decision. The duration is specified in
   * seconds, an integer greater than or equal to 0. You can use NONE to specify unlimited duration.
   */
  defaultTaskScheduleToStartTimeout?: string;
  /**
   * The default maximum duration, specified when registering the activity type, for tasks of this
   * activity type. You can override this default when scheduling a task through the
   * ScheduleActivityTask Decision. The duration is specified in seconds, an integer greater than or
   * equal to 0. You can use NONE to specify unlimited duration.
   */
  defaultTaskScheduleToCloseTimeout?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activityTypeConfigurationSchema: Schema<ActivityTypeConfiguration> =
  s.object<ActivityTypeConfiguration>(
    {
      defaultTaskStartToCloseTimeout: s.optional(s.string()),
      defaultTaskHeartbeatTimeout: s.optional(s.string()),
      defaultTaskList: s.optional(s.lazy(() => taskListSchema)),
      defaultTaskPriority: s.optional(s.string()),
      defaultTaskScheduleToStartTimeout: s.optional(s.string()),
      defaultTaskScheduleToCloseTimeout: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
