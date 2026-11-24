import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** SQL Server LSN position */
export type SqlServerLsnPosition = {
  /** Required. Log sequence number (LSN) from where Logs will be read */
  lsn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sqlServerLsnPositionSchema: Schema<SqlServerLsnPosition> = s.object<SqlServerLsnPosition>(
  {
    lsn: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
