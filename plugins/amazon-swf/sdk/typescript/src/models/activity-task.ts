import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { activityTypeSchema, type ActivityType } from "./activity-type.js";
import { workflowExecutionSchema, type WorkflowExecution } from "./workflow-execution.js";

export type ActivityTask = {
  /**
   * The opaque string used as a handle on the task. This token is used by workers to communicate
   * progress and response information back to the system about the task.
   */
  taskToken: string;
  /** The unique ID of the task. */
  activityId: string;
  /** The ID of the ActivityTaskStarted event recorded in the history. */
  startedEventId: number;
  workflowExecution: WorkflowExecution;
  activityType: ActivityType;
  /**
   * The inputs provided when the activity task was scheduled. The form of the input is user defined
   * and should be meaningful to the activity implementation.
   */
  input?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activityTaskSchema: Schema<ActivityTask> = s.object<ActivityTask>(
  {
    taskToken: s.string(),
    activityId: s.string(),
    startedEventId: s.int(),
    workflowExecution: workflowExecutionSchema,
    activityType: activityTypeSchema,
    input: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
