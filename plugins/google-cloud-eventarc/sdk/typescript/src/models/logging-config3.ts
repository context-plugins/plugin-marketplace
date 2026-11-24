import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logSeveritySchema, type LogSeverity } from "./log-severity.js";

/**
 * Optional. Config to control Platform logging for the Message Bus. This log configuration is
 * applied to the Message Bus itself, and all the Enrollments attached to it.
 */
export type LoggingConfig3 = {
  /**
   * Optional. The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry.
   * Logs at severitiy ≥ this value will be sent, unless it is NONE.
   */
  logSeverity?: LogSeverity;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const loggingConfig3Schema: Schema<LoggingConfig3> = s.object<LoggingConfig3>(
  {
    logSeverity: s.optional(s.lazy(() => logSeveritySchema)),
  },
  { additionalProperties: s.json() },
);
