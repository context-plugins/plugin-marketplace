import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Configuration to specify the Oracle directories to access the log files. */
export type LogFileDirectories = {
  /** Required. Oracle directory for archived logs. */
  archivedLogDirectory?: string;
  /** Required. Oracle directory for online logs. */
  onlineLogDirectory?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const logFileDirectoriesSchema: Schema<LogFileDirectories> = s.object<LogFileDirectories>(
  {
    archivedLogDirectory: s.optional(s.string()),
    onlineLogDirectory: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
