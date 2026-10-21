import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Collector runtime log level */
export const LogLevel17 = {
  Error: "error",
  Warn: "warn",
  Info: "info",
  Debug: "debug",
  Silly: "silly",
} as const;
export type LogLevel17 = (typeof LogLevel17)[keyof typeof LogLevel17] | (string & {});

export const logLevel17Schema: EnumSchema<LogLevel17> = s.enumOf<LogLevel17>(LogLevel17);
