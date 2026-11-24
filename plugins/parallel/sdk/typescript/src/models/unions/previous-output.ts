import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { taskRunJsonOutputSchema, type TaskRunJsonOutput } from "../task-run-json-output.js";
import { taskRunTextOutputSchema, type TaskRunTextOutput } from "../task-run-text-output.js";

/** The full output from the prior run, including all fields and basis. */
export type PreviousOutput = (TaskRunJsonOutput & { type: "json" }) | (TaskRunTextOutput & { type: "text" });

export const previousOutputSchema: Schema<PreviousOutput> = s.discriminatedUnion<PreviousOutput>("type", {
  json: taskRunJsonOutputSchema,
  text: taskRunTextOutputSchema,
});
