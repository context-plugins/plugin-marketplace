import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** MySQL log position */
export type MysqlLogPosition = {
  /** Required. The binary log file name. */
  logFile?: string;
  /** Optional. The position within the binary log file. Default is head of file. */
  logPosition?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mysqlLogPositionSchema: Schema<MysqlLogPosition> = s.object<MysqlLogPosition>(
  {
    logFile: s.optional(s.string()),
    logPosition: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
