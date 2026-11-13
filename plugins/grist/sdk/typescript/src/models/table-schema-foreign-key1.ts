import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reference1Schema, type Reference1 } from "./reference1.js";

export type TableSchemaForeignKey1 = {
  /** Fields that make up the primary key. */
  fields: string;
  reference: Reference1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tableSchemaForeignKey1Schema: Schema<TableSchemaForeignKey1> = s.object<TableSchemaForeignKey1>(
  {
    fields: s.string(),
    reference: reference1Schema,
  },
  { additionalProperties: s.json() },
);
