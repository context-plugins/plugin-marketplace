import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jsonModeSchema, type JsonMode } from "./json-mode.js";
import { mongodbCluster4Schema, type MongodbCluster4 } from "./mongodb-cluster4.js";
import { mongodbCluster5Schema, type MongodbCluster5 } from "./mongodb-cluster5.js";

/** MongoDB data source configuration. */
export type MongodbSourceConfig2 = {
  /**
   * Optional. Maximum number of concurrent backfill tasks. The number should be non-negative and
   * less than or equal to 50. If not set (or set to 0), the system's default value is used
   */
  maxConcurrentBackfillTasks?: number;
  /** The MongoDB collections to exclude from the stream. */
  excludeObjects?: MongodbCluster4;
  /** The MongoDB collections to include in the stream. */
  includeObjects?: MongodbCluster5;
  /** Optional. MongoDB JSON mode to use for the stream. */
  jsonMode?: JsonMode;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mongodbSourceConfig2Schema: Schema<MongodbSourceConfig2> = s.object<MongodbSourceConfig2>(
  {
    maxConcurrentBackfillTasks: s.optional(s.int()),
    excludeObjects: s.optional(s.lazy(() => mongodbCluster4Schema)),
    includeObjects: s.optional(s.lazy(() => mongodbCluster5Schema)),
    jsonMode: s.optional(s.lazy(() => jsonModeSchema)),
  },
  { additionalProperties: s.json() },
);
