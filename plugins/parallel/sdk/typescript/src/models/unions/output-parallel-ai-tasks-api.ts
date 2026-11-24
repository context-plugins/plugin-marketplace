import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { taskRunJsonOutputSchema, type TaskRunJsonOutput } from "../task-run-json-output.js";
import { taskRunTextOutputSchema, type TaskRunTextOutput } from "../task-run-text-output.js";

/** Output from the task conforming to the output schema. */
export type OutputParallelAiTasksApi =
  | (TaskRunJsonOutput & { type: "json" })
  | (TaskRunTextOutput & { type: "text" });

export const outputParallelAiTasksApiSchema: Schema<OutputParallelAiTasksApi> =
  s.discriminatedUnion<OutputParallelAiTasksApi>("type", {
    json: taskRunJsonOutputSchema,
    text: taskRunTextOutputSchema,
  });
