import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { errorSchema, type Error } from "../error.js";

/** Error for the run, present only if status is 'failed'. */
export type ErrorParallelAiTasksApi = Error;

export const errorParallelAiTasksApiSchema: Schema<ErrorParallelAiTasksApi> = s.of<ErrorParallelAiTasksApi>(
  s.union([s.lazy(() => errorSchema)]),
);
