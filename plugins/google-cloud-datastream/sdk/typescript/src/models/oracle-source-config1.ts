import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { binaryLogParser2Schema, type BinaryLogParser2 } from "./binary-log-parser2.js";
import { oracleRdbms2Schema, type OracleRdbms2 } from "./oracle-rdbms2.js";
import { oracleRdbms3Schema, type OracleRdbms3 } from "./oracle-rdbms3.js";

/** Oracle data source configuration. */
export type OracleSourceConfig1 = {
  /**
   * Maximum number of concurrent backfill tasks. The number should be non-negative. If not set (or
   * set to 0), the system's default value is used.
   */
  maxConcurrentBackfillTasks?: number;
  /** Drop large object values. */
  dropLargeObjects?: Record<string, unknown>;
  /** The Oracle objects to exclude from the stream. */
  excludeObjects?: OracleRdbms2;
  /** Use Binary Log Parser. */
  binaryLogParser?: BinaryLogParser2;
  /**
   * Maximum number of concurrent CDC tasks. The number should be non-negative. If not set (or set
   * to 0), the system's default value is used.
   */
  maxConcurrentCdcTasks?: number;
  /** Stream large object values. */
  streamLargeObjects?: Record<string, unknown>;
  /** The Oracle objects to include in the stream. */
  includeObjects?: OracleRdbms3;
  /** Use LogMiner. */
  logMiner?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oracleSourceConfig1Schema: Schema<OracleSourceConfig1> = s.object<OracleSourceConfig1>(
  {
    maxConcurrentBackfillTasks: s.optional(s.int()),
    dropLargeObjects: s.optional(s.record(s.string(), s.unknown())),
    excludeObjects: s.optional(s.lazy(() => oracleRdbms2Schema)),
    binaryLogParser: s.optional(s.lazy(() => binaryLogParser2Schema)),
    maxConcurrentCdcTasks: s.optional(s.int()),
    streamLargeObjects: s.optional(s.record(s.string(), s.unknown())),
    includeObjects: s.optional(s.lazy(() => oracleRdbms3Schema)),
    logMiner: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
