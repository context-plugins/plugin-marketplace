import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sqlServerChangeTables1Schema, type SqlServerChangeTables1 } from "./sql-server-change-tables1.js";
import { sqlServerRdbms3Schema, type SqlServerRdbms3 } from "./sql-server-rdbms3.js";
import { sqlServerRdbms4Schema, type SqlServerRdbms4 } from "./sql-server-rdbms4.js";

/** SQLServer data source configuration. */
export type SqlServerSourceConfig1 = {
  /** Max concurrent CDC tasks. */
  maxConcurrentCdcTasks?: number;
  /** The SQLServer objects to include in the stream. */
  includeObjects?: SqlServerRdbms3;
  /** Max concurrent backfill tasks. */
  maxConcurrentBackfillTasks?: number;
  /** The SQLServer objects to exclude from the stream. */
  excludeObjects?: SqlServerRdbms4;
  /** CDC reader reads from transaction logs. */
  transactionLogs?: Record<string, unknown>;
  /** CDC reader reads from change tables. */
  changeTables?: SqlServerChangeTables1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sqlServerSourceConfig1Schema: Schema<SqlServerSourceConfig1> = s.object<SqlServerSourceConfig1>(
  {
    maxConcurrentCdcTasks: s.optional(s.int()),
    includeObjects: s.optional(s.lazy(() => sqlServerRdbms3Schema)),
    maxConcurrentBackfillTasks: s.optional(s.int()),
    excludeObjects: s.optional(s.lazy(() => sqlServerRdbms4Schema)),
    transactionLogs: s.optional(s.record(s.string(), s.unknown())),
    changeTables: s.optional(s.lazy(() => sqlServerChangeTables1Schema)),
  },
  { additionalProperties: s.json() },
);
