import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { driverLogLevelsSchema, type DriverLogLevels } from "./driver-log-levels.js";

/** Optional. The runtime log config for job execution. */
export type LoggingConfig1 = {
  /**
   * The per-package log levels for the driver. This can include "root" package name to configure
   * rootLogger. Examples: - 'com.google = FATAL' - 'root = INFO' - 'org.apache = DEBUG'
   */
  driverLogLevels?: Record<string, DriverLogLevels>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const loggingConfig1Schema: Schema<LoggingConfig1> = s.object<LoggingConfig1>(
  {
    driverLogLevels: s.optional(
      s.record(
        s.string(),
        s.lazy(() => driverLogLevelsSchema),
      ),
    ),
  },
  { additionalProperties: s.json() },
);
