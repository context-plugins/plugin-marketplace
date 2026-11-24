import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { envLogEntrySchema, type EnvLogEntry } from "./env-log-entry.js";
import { lastTimestampSchema, type LastTimestamp } from "./unions/last-timestamp.js";

export type EnvLogsResponse = {
  traceId: string;
  logs: EnvLogEntry[];
  count: number;
  /** @default false */
  hasMore?: boolean;
  lastTimestamp?: LastTimestamp;
  /** @default false */
  stillRunning?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const envLogsResponseSchema: Schema<EnvLogsResponse> = s.object<EnvLogsResponse>(
  {
    traceId: s.string(),
    logs: s.array(s.lazy(() => envLogEntrySchema)),
    count: s.int(),
    hasMore: s.defaulted(s.boolean(), false),
    lastTimestamp: s.optional(s.lazy(() => lastTimestampSchema)),
    stillRunning: s.defaulted(s.boolean(), false),
    _keysMap: {
      traceId: "trace_id",
      hasMore: "has_more",
      lastTimestamp: "last_timestamp",
      stillRunning: "still_running",
    },
  },
  { additionalProperties: s.json() },
);
