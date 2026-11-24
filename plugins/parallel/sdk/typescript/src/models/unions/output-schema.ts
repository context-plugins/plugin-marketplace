import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Output schema for the Task Run. Populated only if the task was executed with an auto schema. */
export type OutputSchema = Record<string, unknown>;

export const outputSchemaSchema: Schema<OutputSchema> = s.of<OutputSchema>(
  s.union([s.record(s.string(), s.unknown())]),
);
