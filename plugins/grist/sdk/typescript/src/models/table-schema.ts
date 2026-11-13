import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { primaryKeyInternalSchema, primaryKeySchema, type PrimaryKey } from "./unions/primary-key.js";
import {
  tableSchemaFieldInternalSchema,
  tableSchemaFieldSchema,
  type TableSchemaField,
} from "./unions/table-schema-field.js";
import {
  tableSchemaForeignKey2InternalSchema,
  tableSchemaForeignKey2Schema,
  type TableSchemaForeignKey2,
} from "./unions/table-schema-foreign-key2.js";

/**
 * A Table Schema for this resource, compliant with the [Table Schema](/tableschema/) specification.
 */
export type TableSchema = {
  /** An `array` of Table Schema Field objects. */
  fields: TableSchemaField[];
  /**
   * A primary key is a field name or an array of field names, whose values `MUST` uniquely identify
   * each row in the table.
   */
  primaryKey?: PrimaryKey;
  foreignKeys?: TableSchemaForeignKey2[];
  /**
   * Values that when encountered in the source, should be considered as `null`, 'not present', or
   * 'blank' values.
   */
  missingValues?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const tableSchemaProperties: s.Shape<TableSchema> = {
  fields: s.array(s.lazy(() => tableSchemaFieldInternalSchema)),
  primaryKey: s.optional(s.lazy(() => primaryKeyInternalSchema)),
  foreignKeys: s.optional(s.array(s.lazy(() => tableSchemaForeignKey2InternalSchema))),
  missingValues: s.optional(s.array(s.string())),
};

export const tableSchemaInternalSchema: Schema<TableSchema> = s.object<TableSchema>(tableSchemaProperties, {
  additionalProperties: s.json(),
});

export const tableSchemaSchema: Schema<TableSchema> = s.lazySchema(() =>
  s.object<TableSchema>(
    {
      ...tableSchemaProperties,
      fields: s.array(s.lazy(() => tableSchemaFieldSchema)).check(s.minLength(1)),
      primaryKey: s.optional(s.lazy(() => primaryKeySchema)),
      foreignKeys: s.optional(s.array(s.lazy(() => tableSchemaForeignKey2Schema)).check(s.minLength(1))),
    },
    { additionalProperties: s.json() },
  ),
);
