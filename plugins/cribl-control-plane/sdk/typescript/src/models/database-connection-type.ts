import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DatabaseConnectionType = {
  Mysql: "mysql",
  Oracle: "oracle",
  Postgres: "postgres",
  Snowflake: "snowflake",
  Sqlserver: "sqlserver",
  Teradata: "teradata",
} as const;
export type DatabaseConnectionType =
  | (typeof DatabaseConnectionType)[keyof typeof DatabaseConnectionType]
  | (string & {});

export const databaseConnectionTypeSchema: EnumSchema<DatabaseConnectionType> =
  s.enumOf<DatabaseConnectionType>(DatabaseConnectionType);
