import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { taskRunJsonOutputSchema, type TaskRunJsonOutput } from "../task-run-json-output.js";
import { taskRunTextOutputSchema, type TaskRunTextOutput } from "../task-run-text-output.js";

export type LatestSnapshot1 = (TaskRunJsonOutput & { type: "json" }) | (TaskRunTextOutput & { type: "text" });

export const latestSnapshot1Schema: Schema<LatestSnapshot1> = s.discriminatedUnion<LatestSnapshot1>("type", {
  json: taskRunJsonOutputSchema,
  text: taskRunTextOutputSchema,
});
