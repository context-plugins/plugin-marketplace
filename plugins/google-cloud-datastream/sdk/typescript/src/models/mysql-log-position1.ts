import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** MySQL specific log position to start replicating from. */
export type MysqlLogPosition1 = {
  /** Required. The binary log file name. */
  logFile?: string;
  /** Optional. The position within the binary log file. Default is head of file. */
  logPosition?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mysqlLogPosition1Schema: Schema<MysqlLogPosition1> = s.object<MysqlLogPosition1>(
  {
    logFile: s.optional(s.string()),
    logPosition: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
