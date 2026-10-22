import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Collector runtime log level. */
export const LogLevel7 = {
  Error: "error",
  Warn: "warn",
  Info: "info",
  Debug: "debug",
  Silly: "silly",
} as const;
export type LogLevel7 = (typeof LogLevel7)[keyof typeof LogLevel7] | (string & {});

export const logLevel7Schema: EnumSchema<LogLevel7> = s.enumOf<LogLevel7>(LogLevel7);
