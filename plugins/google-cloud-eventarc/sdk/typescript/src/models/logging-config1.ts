import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logSeveritySchema, type LogSeverity } from "./log-severity.js";

/** Optional. Config to control Platform Logging for Pipelines. */
export type LoggingConfig1 = {
  /**
   * Optional. The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry.
   * Logs at severitiy ≥ this value will be sent, unless it is NONE.
   */
  logSeverity?: LogSeverity;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const loggingConfig1Schema: Schema<LoggingConfig1> = s.object<LoggingConfig1>(
  {
    logSeverity: s.optional(s.lazy(() => logSeveritySchema)),
  },
  { additionalProperties: s.json() },
);
