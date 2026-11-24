import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { output2Schema, type Output2 } from "./output2.js";

/** Output from the run; included only if requested and if status == `completed`. */
export type Output1ParallelAiTasksApi = Output2;

export const output1ParallelAiTasksApiSchema: Schema<Output1ParallelAiTasksApi> =
  s.of<Output1ParallelAiTasksApi>(s.union([s.lazy(() => output2Schema)]));
