import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logSeveritySchema, type LogSeverity } from "./log-severity.js";

/** The configuration for Platform Telemetry logging for Eventarc Advanced resources. */
export type LoggingConfig = {
  /**
   * Optional. The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry.
   * Logs at severitiy ≥ this value will be sent, unless it is NONE.
   */
  logSeverity?: LogSeverity;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const loggingConfigSchema: Schema<LoggingConfig> = s.object<LoggingConfig>(
  {
    logSeverity: s.optional(s.lazy(() => logSeveritySchema)),
  },
  { additionalProperties: s.json() },
);
