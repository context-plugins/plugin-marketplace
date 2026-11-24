import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskListSchema, type TaskList } from "./task-list.js";

export type RegisterActivityTypeInput = {
  /** The name of the domain in which this activity is to be registered. */
  domain: string;
  /**
   * The name of the activity type within the domain. The specified string must not contain a :
   * (colon), / (slash), | (vertical bar), or any control characters (\u0000-\u001f |
   * \u007f-\u009f). Also, it must not be the literal string arn.
   */
  name: string;
  /**
   * The version of the activity type. The activity type consists of the name and version, the
   * combination of which must be unique within the domain. The specified string must not contain a
   * : (colon), / (slash), | (vertical bar), or any control characters (\u0000-\u001f |
   * \u007f-\u009f). Also, it must not be the literal string arn.
   */
  version: string;
  /** A textual description of the activity type. */
  description?: string;
  /**
   * If set, specifies the default maximum duration that a worker can take to process tasks of this
   * activity type. This default can be overridden when scheduling an activity task using the
   * ScheduleActivityTask Decision. The duration is specified in seconds, an integer greater than or
   * equal to 0. You can use NONE to specify unlimited duration.
   */
  defaultTaskStartToCloseTimeout?: string;
  /**
   * If set, specifies the default maximum time before which a worker processing a task of this type
   * must report progress by calling RecordActivityTaskHeartbeat. If the timeout is exceeded, the
   * activity task is automatically timed out. This default can be overridden when scheduling an
   * activity task using the ScheduleActivityTask Decision. If the activity worker subsequently
   * attempts to record a heartbeat or returns a result, the activity worker receives an
   * UnknownResource fault. In this case, Amazon SWF no longer considers the activity task to be
   * valid; the activity worker should clean up the activ
   */
  defaultTaskHeartbeatTimeout?: string;
  defaultTaskList?: TaskList;
  /**
   * The default task priority to assign to the activity type. If not assigned, then 0 is used.
   * Valid values are integers that range from Java's Integer.MIN_VALUE (-2147483648) to
   * Integer.MAX_VALUE (2147483647). Higher numbers indicate higher priority. For more information
   * about setting task priority, see Setting Task Priority in the in the Amazon SWF Developer
   * Guide..
   */
  defaultTaskPriority?: string;
  /**
   * If set, specifies the default maximum duration that a task of this activity type can wait
   * before being assigned to a worker. This default can be overridden when scheduling an activity
   * task using the ScheduleActivityTask Decision. The duration is specified in seconds, an integer
   * greater than or equal to 0. You can use NONE to specify unlimited duration.
   */
  defaultTaskScheduleToStartTimeout?: string;
  /**
   * If set, specifies the default maximum duration for a task of this activity type. This default
   * can be overridden when scheduling an activity task using the ScheduleActivityTask Decision. The
   * duration is specified in seconds, an integer greater than or equal to 0. You can use NONE to
   * specify unlimited duration.
   */
  defaultTaskScheduleToCloseTimeout?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const registerActivityTypeInputSchema: Schema<RegisterActivityTypeInput> =
  s.object<RegisterActivityTypeInput>(
    {
      domain: s.string(),
      name: s.string(),
      version: s.string(),
      description: s.optional(s.string()),
      defaultTaskStartToCloseTimeout: s.optional(s.string()),
      defaultTaskHeartbeatTimeout: s.optional(s.string()),
      defaultTaskList: s.optional(s.lazy(() => taskListSchema)),
      defaultTaskPriority: s.optional(s.string()),
      defaultTaskScheduleToStartTimeout: s.optional(s.string()),
      defaultTaskScheduleToCloseTimeout: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
