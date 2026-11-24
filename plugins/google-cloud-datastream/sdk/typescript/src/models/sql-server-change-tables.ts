import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sqlServerDdlConfig2Schema, type SqlServerDdlConfig2 } from "./sql-server-ddl-config2.js";

/** Configuration to use Change Tables CDC read method. */
export type SqlServerChangeTables = {
  /** Optional. DDL configuration for change tables. */
  ddlConfig?: SqlServerDdlConfig2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sqlServerChangeTablesSchema: Schema<SqlServerChangeTables> = s.object<SqlServerChangeTables>(
  {
    ddlConfig: s.optional(s.lazy(() => sqlServerDdlConfig2Schema)),
  },
  { additionalProperties: s.json() },
);
