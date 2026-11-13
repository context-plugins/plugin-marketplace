import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  tableSchemaForeignKeyInternalSchema,
  tableSchemaForeignKeySchema,
  type TableSchemaForeignKey,
} from "../table-schema-foreign-key.js";
import { tableSchemaForeignKey1Schema, type TableSchemaForeignKey1 } from "../table-schema-foreign-key1.js";

/** Table Schema Foreign Key */
export type TableSchemaForeignKey2 = TableSchemaForeignKey | TableSchemaForeignKey1;

export const tableSchemaForeignKey2InternalSchema: Schema<TableSchemaForeignKey2> =
  s.of<TableSchemaForeignKey2>(
    s.union([s.lazy(() => tableSchemaForeignKeyInternalSchema), s.lazy(() => tableSchemaForeignKey1Schema)]),
  );

export const tableSchemaForeignKey2Schema: Schema<TableSchemaForeignKey2> = s.lazySchema(() =>
  s.of<TableSchemaForeignKey2>(
    s.union([s.lazy(() => tableSchemaForeignKeySchema), s.lazy(() => tableSchemaForeignKey1Schema)]),
  ),
);
