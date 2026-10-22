import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of database engine for the connection. */
export const DatabaseConnectionType1 = {
  Mysql: "mysql",
  Oracle: "oracle",
  Postgres: "postgres",
  Snowflake: "snowflake",
  Sqlserver: "sqlserver",
  Teradata: "teradata",
} as const;
export type DatabaseConnectionType1 =
  | (typeof DatabaseConnectionType1)[keyof typeof DatabaseConnectionType1]
  | (string & {});

export const databaseConnectionType1Schema: EnumSchema<DatabaseConnectionType1> =
  s.enumOf<DatabaseConnectionType1>(DatabaseConnectionType1);
