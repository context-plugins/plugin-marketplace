import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { levelSchema, type Level } from "./level.js";

/** A single log line entry. */
export type LogEntry = {
  /** ISO 8601 timestamp of the log entry. */
  timestamp?: Date;
  /** Log level. */
  level?: Level;
  /** The log message content. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const logEntrySchema: Schema<LogEntry> = s.object<LogEntry>(
  {
    timestamp: s.optional(s.dateTime()),
    level: s.optional(s.lazy(() => levelSchema)),
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
