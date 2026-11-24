import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** MySQL GTID set to start replicating from. */
export type MysqlGtidPosition2 = {
  /** Required. The gtid set to start replication from. */
  gtidSet?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mysqlGtidPosition2Schema: Schema<MysqlGtidPosition2> = s.object<MysqlGtidPosition2>(
  {
    gtidSet: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
