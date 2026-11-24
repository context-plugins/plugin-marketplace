import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mysqlColumnSchema, type MysqlColumn } from "./mysql-column.js";

/** MySQL table. */
export type MysqlTable = {
  /** The table name. */
  table?: string;
  /**
   * MySQL columns in the database. When unspecified as part of include/exclude objects,
   * includes/excludes everything.
   */
  mysqlColumns?: MysqlColumn[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mysqlTableSchema: Schema<MysqlTable> = s.object<MysqlTable>(
  {
    table: s.optional(s.string()),
    mysqlColumns: s.optional(s.array(s.lazy(() => mysqlColumnSchema))),
  },
  { additionalProperties: s.json() },
);
