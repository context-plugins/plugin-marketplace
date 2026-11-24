import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskTaskSchema, type TaskTask } from "./task-task.js";

/** Response containing created tasks count and task details */
export type TaskBatchCreateResponse = {
  created?: number;
  tasks?: TaskTask[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskBatchCreateResponseSchema: Schema<TaskBatchCreateResponse> =
  s.object<TaskBatchCreateResponse>(
    {
      created: s.optional(s.int()),
      tasks: s.optional(s.array(s.lazy(() => taskTaskSchema))),
    },
    { additionalProperties: s.json() },
  );
