import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Collector runtime Log Level */
export const LogLevel15 = {
  Error: "error",
  Warn: "warn",
  Info: "info",
  Debug: "debug",
} as const;
export type LogLevel15 = (typeof LogLevel15)[keyof typeof LogLevel15] | (string & {});

export const logLevel15Schema: EnumSchema<LogLevel15> = s.enumOf<LogLevel15>(LogLevel15);
