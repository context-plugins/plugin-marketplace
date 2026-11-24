import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

/** The schema definition of a field within a table. */
export type FieldSchema = {
  /** The unique identifier of the field (starts with 'fld'). */
  id: string;
  /** The name of the field. */
  name: string;
  /** The type of the field. */
  type: Type;
  /** The description of the field. */
  description?: string;
  /** Configuration options for the field. The structure depends on the field type. */
  options?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fieldSchemaSchema: Schema<FieldSchema> = s.object<FieldSchema>(
  {
    id: s.string(),
    name: s.string(),
    type: typeSchema,
    description: s.optional(s.string()),
    options: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
