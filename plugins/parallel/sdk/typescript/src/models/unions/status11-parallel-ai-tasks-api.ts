import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  status1ParallelAiTasksApiSchema,
  type Status1ParallelAiTasksApi,
} from "../status1-parallel-ai-tasks-api.js";

export type Status11ParallelAiTasksApi = Status1ParallelAiTasksApi;

export const status11ParallelAiTasksApiSchema: Schema<Status11ParallelAiTasksApi> =
  s.of<Status11ParallelAiTasksApi>(s.union([s.lazy(() => status1ParallelAiTasksApiSchema)]));
