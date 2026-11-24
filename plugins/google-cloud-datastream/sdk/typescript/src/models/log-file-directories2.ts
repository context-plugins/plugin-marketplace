import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Use Oracle directories. */
export type LogFileDirectories2 = {
  /** Required. Oracle directory for archived logs. */
  archivedLogDirectory?: string;
  /** Required. Oracle directory for online logs. */
  onlineLogDirectory?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const logFileDirectories2Schema: Schema<LogFileDirectories2> = s.object<LogFileDirectories2>(
  {
    archivedLogDirectory: s.optional(s.string()),
    onlineLogDirectory: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
