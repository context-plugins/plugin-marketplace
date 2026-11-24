import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Input to the task, either text or a JSON object. */
export type InputParallelAiTasksApi = string | Record<string, unknown>;

export const inputParallelAiTasksApiSchema: Schema<InputParallelAiTasksApi> = s.of<InputParallelAiTasksApi>(
  s.union([s.string(), s.record(s.string(), s.unknown())]),
);
