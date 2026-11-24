import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskListSchema, type TaskList } from "./task-list.js";

export type CountPendingDecisionTasksInput = {
  /** The name of the domain that contains the task list. */
  domain: string;
  taskList: TaskList;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const countPendingDecisionTasksInputSchema: Schema<CountPendingDecisionTasksInput> =
  s.object<CountPendingDecisionTasksInput>(
    {
      domain: s.string(),
      taskList: taskListSchema,
    },
    { additionalProperties: s.json() },
  );
