import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { taskRunJsonOutputSchema, type TaskRunJsonOutput } from "../task-run-json-output.js";
import { taskRunTextOutputSchema, type TaskRunTextOutput } from "../task-run-text-output.js";

export type Output2 = (TaskRunJsonOutput & { type: "json" }) | (TaskRunTextOutput & { type: "text" });

export const output2Schema: Schema<Output2> = s.discriminatedUnion<Output2>("type", {
  json: taskRunJsonOutputSchema,
  text: taskRunTextOutputSchema,
});
