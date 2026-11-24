import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskListSchema, type TaskList } from "./task-list.js";

export type DecisionTaskCompletedEventAttributes = {
  /** User defined context for the workflow execution. */
  executionContext?: string;
  /**
   * The ID of the DecisionTaskScheduled event that was recorded when this decision task was
   * scheduled. This information can be useful for diagnosing problems by tracing back the chain of
   * events leading up to this event.
   */
  scheduledEventId: number;
  /**
   * The ID of the DecisionTaskStarted event recorded when this decision task was started. This
   * information can be useful for diagnosing problems by tracing back the chain of events leading
   * up to this event.
   */
  startedEventId: number;
  taskList?: TaskList;
  /** The maximum amount of time the decision task can wait to be assigned to a worker. */
  taskListScheduleToStartTimeout?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const decisionTaskCompletedEventAttributesSchema: Schema<DecisionTaskCompletedEventAttributes> =
  s.object<DecisionTaskCompletedEventAttributes>(
    {
      executionContext: s.optional(s.string()),
      scheduledEventId: s.int(),
      startedEventId: s.int(),
      taskList: s.optional(s.lazy(() => taskListSchema)),
      taskListScheduleToStartTimeout: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
