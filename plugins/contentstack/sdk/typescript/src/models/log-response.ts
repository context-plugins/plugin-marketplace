import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logEntrySchema, type LogEntry } from "./log-entry.js";

/** Log output from a deployment or server. */
export type LogResponse = {
  /** Array of log line entries. */
  logs?: LogEntry[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const logResponseSchema: Schema<LogResponse> = s.object<LogResponse>(
  {
    logs: s.optional(s.array(s.lazy(() => logEntrySchema))),
  },
  { additionalProperties: s.json() },
);
