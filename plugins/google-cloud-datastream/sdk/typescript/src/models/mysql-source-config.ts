import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mysqlRdbms2Schema, type MysqlRdbms2 } from "./mysql-rdbms2.js";
import { mysqlRdbms3Schema, type MysqlRdbms3 } from "./mysql-rdbms3.js";

/** Configuration for syncing data from a MySQL source. */
export type MysqlSourceConfig = {
  /**
   * Maximum number of concurrent CDC tasks. The number should be non negative. If not set (or set
   * to 0), the system's default value will be used.
   */
  maxConcurrentCdcTasks?: number;
  /** The MySQL objects to exclude from the stream. */
  excludeObjects?: MysqlRdbms2;
  /** Use GTID based replication. */
  gtid?: Record<string, unknown>;
  /** Use Binary log position based replication. */
  binaryLogPosition?: Record<string, unknown>;
  /** The MySQL objects to retrieve from the source. */
  includeObjects?: MysqlRdbms3;
  /**
   * Maximum number of concurrent backfill tasks. The number should be non negative. If not set (or
   * set to 0), the system's default value will be used.
   */
  maxConcurrentBackfillTasks?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mysqlSourceConfigSchema: Schema<MysqlSourceConfig> = s.object<MysqlSourceConfig>(
  {
    maxConcurrentCdcTasks: s.optional(s.int()),
    excludeObjects: s.optional(s.lazy(() => mysqlRdbms2Schema)),
    gtid: s.optional(s.record(s.string(), s.unknown())),
    binaryLogPosition: s.optional(s.record(s.string(), s.unknown())),
    includeObjects: s.optional(s.lazy(() => mysqlRdbms3Schema)),
    maxConcurrentBackfillTasks: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
