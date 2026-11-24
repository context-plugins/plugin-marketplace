import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { taskRunJsonOutputSchema, type TaskRunJsonOutput } from "../task-run-json-output.js";
import { taskRunTextOutputSchema, type TaskRunTextOutput } from "../task-run-text-output.js";

/** Text or JSON output describing the detected change. */
export type OutputParallelAiMonitorApi =
  | (TaskRunJsonOutput & { type: "json" })
  | (TaskRunTextOutput & { type: "text" });

export const outputParallelAiMonitorApiSchema: Schema<OutputParallelAiMonitorApi> =
  s.discriminatedUnion<OutputParallelAiMonitorApi>("type", {
    json: taskRunJsonOutputSchema,
    text: taskRunTextOutputSchema,
  });
