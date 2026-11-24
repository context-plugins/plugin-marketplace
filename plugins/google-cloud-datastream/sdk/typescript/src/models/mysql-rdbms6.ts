import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mysqlDatabaseSchema, type MysqlDatabase } from "./mysql-database.js";

/** MySQL data source objects to avoid backfilling. */
export type MysqlRdbms6 = {
  /** Mysql databases on the server */
  mysqlDatabases?: MysqlDatabase[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mysqlRdbms6Schema: Schema<MysqlRdbms6> = s.object<MysqlRdbms6>(
  {
    mysqlDatabases: s.optional(s.array(s.lazy(() => mysqlDatabaseSchema))),
  },
  { additionalProperties: s.json() },
);
