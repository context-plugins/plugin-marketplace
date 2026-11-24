import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** MySQL GTID position */
export type MysqlGtidPosition = {
  /** Required. The gtid set to start replication from. */
  gtidSet?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mysqlGtidPositionSchema: Schema<MysqlGtidPosition> = s.object<MysqlGtidPosition>(
  {
    gtidSet: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
