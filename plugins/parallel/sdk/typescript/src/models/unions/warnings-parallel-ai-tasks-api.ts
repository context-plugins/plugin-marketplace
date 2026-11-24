import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  warningParallelAiTasksApiSchema,
  type WarningParallelAiTasksApi,
} from "../warning-parallel-ai-tasks-api.js";

/** Warnings for the run, if any. */
export type WarningsParallelAiTasksApi = WarningParallelAiTasksApi[];

export const warningsParallelAiTasksApiSchema: Schema<WarningsParallelAiTasksApi> =
  s.of<WarningsParallelAiTasksApi>(s.union([s.array(s.lazy(() => warningParallelAiTasksApiSchema))]));
