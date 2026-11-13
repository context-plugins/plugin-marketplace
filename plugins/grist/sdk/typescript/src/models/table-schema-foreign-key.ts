import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { referenceInternalSchema, referenceSchema, type Reference } from "./reference.js";

export type TableSchemaForeignKey = {
  fields: string[];
  reference: Reference;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const tableSchemaForeignKeyProperties: s.Shape<TableSchemaForeignKey> = {
  fields: s.array(s.string()),
  reference: referenceInternalSchema,
};

export const tableSchemaForeignKeyInternalSchema: Schema<TableSchemaForeignKey> =
  s.object<TableSchemaForeignKey>(tableSchemaForeignKeyProperties, { additionalProperties: s.json() });

export const tableSchemaForeignKeySchema: Schema<TableSchemaForeignKey> = s.lazySchema(() =>
  s.object<TableSchemaForeignKey>(
    {
      ...tableSchemaForeignKeyProperties,
      reference: referenceSchema,
    },
    { additionalProperties: s.json() },
  ),
);
