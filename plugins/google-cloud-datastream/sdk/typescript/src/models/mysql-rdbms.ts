import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mysqlDatabaseSchema, type MysqlDatabase } from "./mysql-database.js";

/** MySQL database structure */
export type MysqlRdbms = {
  /** Mysql databases on the server */
  mysqlDatabases?: MysqlDatabase[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mysqlRdbmsSchema: Schema<MysqlRdbms> = s.object<MysqlRdbms>(
  {
    mysqlDatabases: s.optional(s.array(s.lazy(() => mysqlDatabaseSchema))),
  },
  { additionalProperties: s.json() },
);
