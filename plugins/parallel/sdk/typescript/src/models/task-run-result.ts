import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskRun1Schema, type TaskRun1 } from "./task-run1.js";
import {
  outputParallelAiTasksApiSchema,
  type OutputParallelAiTasksApi,
} from "./unions/output-parallel-ai-tasks-api.js";

/** Result of a task run. */
export type TaskRunResult = {
  /** Task run object with status 'completed'. */
  run: TaskRun1;
  /** Output from the task conforming to the output schema. */
  output: OutputParallelAiTasksApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskRunResultSchema: Schema<TaskRunResult> = s.object<TaskRunResult>(
  {
    run: taskRun1Schema,
    output: outputParallelAiTasksApiSchema,
  },
  { additionalProperties: s.json() },
);
