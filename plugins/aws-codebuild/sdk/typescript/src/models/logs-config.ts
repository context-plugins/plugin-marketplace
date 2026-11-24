import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cloudWatchLogsConfigSchema, type CloudWatchLogsConfig } from "./cloud-watch-logs-config.js";
import { s3LogsConfigSchema, type S3LogsConfig } from "./s3-logs-config.js";

export type LogsConfig = {
  cloudWatchLogs?: CloudWatchLogsConfig;
  s3Logs?: S3LogsConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const logsConfigSchema: Schema<LogsConfig> = s.object<LogsConfig>(
  {
    cloudWatchLogs: s.optional(s.lazy(() => cloudWatchLogsConfigSchema)),
    s3Logs: s.optional(s.lazy(() => s3LogsConfigSchema)),
  },
  { additionalProperties: s.json() },
);
