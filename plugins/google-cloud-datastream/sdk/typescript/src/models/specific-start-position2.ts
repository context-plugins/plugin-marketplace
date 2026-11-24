import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  mongodbChangeStreamPosition2Schema,
  type MongodbChangeStreamPosition2,
} from "./mongodb-change-stream-position2.js";
import { mysqlGtidPosition2Schema, type MysqlGtidPosition2 } from "./mysql-gtid-position2.js";
import { mysqlLogPosition1Schema, type MysqlLogPosition1 } from "./mysql-log-position1.js";
import { oracleScnPosition2Schema, type OracleScnPosition2 } from "./oracle-scn-position2.js";
import {
  spannerChangeStreamPosition2Schema,
  type SpannerChangeStreamPosition2,
} from "./spanner-change-stream-position2.js";
import { sqlServerLsnPosition1Schema, type SqlServerLsnPosition1 } from "./sql-server-lsn-position1.js";

/** Optional. Start replicating from a specific position in the source. */
export type SpecificStartPosition2 = {
  /** Oracle SCN to start replicating from. */
  oracleScnPosition?: OracleScnPosition2;
  /** MySQL GTID set to start replicating from. */
  mysqlGtidPosition?: MysqlGtidPosition2;
  /** MySQL specific log position to start replicating from. */
  mysqlLogPosition?: MysqlLogPosition1;
  /** MongoDB change stream position to start replicating from. */
  mongodbChangeStreamPosition?: MongodbChangeStreamPosition2;
  /** SqlServer LSN to start replicating from. */
  sqlServerLsnPosition?: SqlServerLsnPosition1;
  /** Optional. Spanner change stream position to start replicating from. */
  spannerChangeStreamPosition?: SpannerChangeStreamPosition2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const specificStartPosition2Schema: Schema<SpecificStartPosition2> = s.object<SpecificStartPosition2>(
  {
    oracleScnPosition: s.optional(s.lazy(() => oracleScnPosition2Schema)),
    mysqlGtidPosition: s.optional(s.lazy(() => mysqlGtidPosition2Schema)),
    mysqlLogPosition: s.optional(s.lazy(() => mysqlLogPosition1Schema)),
    mongodbChangeStreamPosition: s.optional(s.lazy(() => mongodbChangeStreamPosition2Schema)),
    sqlServerLsnPosition: s.optional(s.lazy(() => sqlServerLsnPosition1Schema)),
    spannerChangeStreamPosition: s.optional(s.lazy(() => spannerChangeStreamPosition2Schema)),
  },
  { additionalProperties: s.json() },
);
