import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Collector runtime log level (verbosity) */
export const LogLevel19 = {
  Error: "error",
  Warn: "warn",
  Info: "info",
  Debug: "debug",
} as const;
export type LogLevel19 = (typeof LogLevel19)[keyof typeof LogLevel19] | (string & {});

export const logLevel19Schema: EnumSchema<LogLevel19> = s.enumOf<LogLevel19>(LogLevel19);
