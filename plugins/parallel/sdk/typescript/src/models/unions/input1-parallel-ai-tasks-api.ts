import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { taskRunInputInternalSchema, taskRunInputSchema, type TaskRunInput } from "../task-run-input.js";

/** Input to the run; included only if requested. */
export type Input1ParallelAiTasksApi = TaskRunInput;

export const input1ParallelAiTasksApiInternalSchema: Schema<Input1ParallelAiTasksApi> =
  s.of<Input1ParallelAiTasksApi>(s.union([s.lazy(() => taskRunInputInternalSchema)]));

export const input1ParallelAiTasksApiSchema: Schema<Input1ParallelAiTasksApi> = s.lazySchema(() =>
  s.of<Input1ParallelAiTasksApi>(s.union([s.lazy(() => taskRunInputSchema)])),
);
