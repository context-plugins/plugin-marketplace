import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Optional. The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry. Logs
 * at severitiy ≥ this value will be sent, unless it is NONE.
 */
export const LogSeverity = {
  LogSeverityUnspecified: "LOG_SEVERITY_UNSPECIFIED",
  None: "NONE",
  Debug: "DEBUG",
  Info: "INFO",
  Notice: "NOTICE",
  Warning: "WARNING",
  Error: "ERROR",
  Critical: "CRITICAL",
  Alert: "ALERT",
  Emergency: "EMERGENCY",
} as const;
export type LogSeverity = (typeof LogSeverity)[keyof typeof LogSeverity] | (string & {});

export const logSeveritySchema: EnumSchema<LogSeverity> = s.enumOf<LogSeverity>(LogSeverity);
