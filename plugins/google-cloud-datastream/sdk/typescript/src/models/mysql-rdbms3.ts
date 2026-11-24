import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mysqlDatabaseSchema, type MysqlDatabase } from "./mysql-database.js";

/** The MySQL objects to retrieve from the source. */
export type MysqlRdbms3 = {
  /** Mysql databases on the server */
  mysqlDatabases?: MysqlDatabase[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mysqlRdbms3Schema: Schema<MysqlRdbms3> = s.object<MysqlRdbms3>(
  {
    mysqlDatabases: s.optional(s.array(s.lazy(() => mysqlDatabaseSchema))),
  },
  { additionalProperties: s.json() },
);
