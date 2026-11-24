import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { taskRunJsonOutputSchema, type TaskRunJsonOutput } from "../task-run-json-output.js";
import { taskRunTextOutputSchema, type TaskRunTextOutput } from "../task-run-text-output.js";

/**
 * Partial output containing only the fields that changed since the previous execution, each with
 * its `basis` (reasoning and citations).
 */
export type ChangedOutput = (TaskRunJsonOutput & { type: "json" }) | (TaskRunTextOutput & { type: "text" });

export const changedOutputSchema: Schema<ChangedOutput> = s.discriminatedUnion<ChangedOutput>("type", {
  json: taskRunJsonOutputSchema,
  text: taskRunTextOutputSchema,
});
