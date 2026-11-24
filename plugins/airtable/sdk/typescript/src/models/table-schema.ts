import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fieldSchemaSchema, type FieldSchema } from "./field-schema.js";
import { viewSchemaSchema, type ViewSchema } from "./view-schema.js";

/** The schema definition of a table within a base. */
export type TableSchema = {
  /** The unique identifier of the table (starts with 'tbl'). */
  id: string;
  /** The name of the table. */
  name: string;
  /** The description of the table. */
  description?: string;
  /** The ID of the primary field for this table. */
  primaryFieldId?: string;
  /** The list of field definitions in the table. */
  fields: FieldSchema[];
  /** The list of view definitions in the table. */
  views: ViewSchema[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tableSchemaSchema: Schema<TableSchema> = s.object<TableSchema>(
  {
    id: s.string(),
    name: s.string(),
    description: s.optional(s.string()),
    primaryFieldId: s.optional(s.string()),
    fields: s.array(s.lazy(() => fieldSchemaSchema)),
    views: s.array(s.lazy(() => viewSchemaSchema)),
  },
  { additionalProperties: s.json() },
);
