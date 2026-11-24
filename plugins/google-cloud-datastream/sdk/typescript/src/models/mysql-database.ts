import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mysqlTableSchema, type MysqlTable } from "./mysql-table.js";

/** MySQL database. */
export type MysqlDatabase = {
  /** The database name. */
  database?: string;
  /** Tables in the database. */
  mysqlTables?: MysqlTable[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mysqlDatabaseSchema: Schema<MysqlDatabase> = s.object<MysqlDatabase>(
  {
    database: s.optional(s.string()),
    mysqlTables: s.optional(s.array(s.lazy(() => mysqlTableSchema))),
  },
  { additionalProperties: s.json() },
);
