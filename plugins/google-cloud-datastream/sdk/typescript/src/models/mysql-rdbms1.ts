import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mysqlDatabaseSchema, type MysqlDatabase } from "./mysql-database.js";

/** Enriched MySQL RDBMS object. */
export type MysqlRdbms1 = {
  /** Mysql databases on the server */
  mysqlDatabases?: MysqlDatabase[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mysqlRdbms1Schema: Schema<MysqlRdbms1> = s.object<MysqlRdbms1>(
  {
    mysqlDatabases: s.optional(s.array(s.lazy(() => mysqlDatabaseSchema))),
  },
  { additionalProperties: s.json() },
);
