import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskListSchema, type TaskList } from "./task-list.js";

export type DecisionTaskScheduledEventAttributes = {
  taskList: TaskList;
  /**
   * A task priority that, if set, specifies the priority for this decision task. Valid values are
   * integers that range from Java's Integer.MIN_VALUE (-2147483648) to Integer.MAX_VALUE
   * (2147483647). Higher numbers indicate higher priority. For more information about setting task
   * priority, see Setting Task Priority in the Amazon SWF Developer Guide.
   */
  taskPriority?: string;
  /**
   * The maximum duration for this decision task. The task is considered timed out if it doesn't
   * completed within this duration. The duration is specified in seconds, an integer greater than
   * or equal to 0. You can use NONE to specify unlimited duration.
   */
  startToCloseTimeout?: string;
  /** The maximum amount of time the decision task can wait to be assigned to a worker. */
  scheduleToStartTimeout?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const decisionTaskScheduledEventAttributesSchema: Schema<DecisionTaskScheduledEventAttributes> =
  s.object<DecisionTaskScheduledEventAttributes>(
    {
      taskList: taskListSchema,
      taskPriority: s.optional(s.string()),
      startToCloseTimeout: s.optional(s.string()),
      scheduleToStartTimeout: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
