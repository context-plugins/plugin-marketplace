import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sqlServerColumnSchema, type SqlServerColumn } from "./sql-server-column.js";

/** SQLServer table. */
export type SqlServerTable = {
  /**
   * SQLServer columns in the schema. When unspecified as part of include/exclude objects,
   * includes/excludes everything.
   */
  columns?: SqlServerColumn[];
  /** The table name. */
  table?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sqlServerTableSchema: Schema<SqlServerTable> = s.object<SqlServerTable>(
  {
    columns: s.optional(s.array(s.lazy(() => sqlServerColumnSchema))),
    table: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
