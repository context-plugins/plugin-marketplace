import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mysqlDatabaseSchema, type MysqlDatabase } from "./mysql-database.js";

/** Optional. MySQL RDBMS to enrich with child data objects and metadata. */
export type MysqlRdbms4 = {
  /** Mysql databases on the server */
  mysqlDatabases?: MysqlDatabase[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mysqlRdbms4Schema: Schema<MysqlRdbms4> = s.object<MysqlRdbms4>(
  {
    mysqlDatabases: s.optional(s.array(s.lazy(() => mysqlDatabaseSchema))),
  },
  { additionalProperties: s.json() },
);
