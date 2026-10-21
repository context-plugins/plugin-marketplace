import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * JSON Schema describing tool arguments. The model uses this schema to construct the tool input
 * object.
 */
export type InputSchema = Record<string, unknown>;

export const inputSchemaSchema: Schema<InputSchema> = s.of<InputSchema>(
  s.union([s.record(s.string(), s.unknown())]),
);
