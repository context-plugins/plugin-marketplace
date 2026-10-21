import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Level at which to set task logging */
export const LogLevel18 = {
  Error: "error",
  Warn: "warn",
  Info: "info",
  Debug: "debug",
  Silly: "silly",
} as const;
export type LogLevel18 = (typeof LogLevel18)[keyof typeof LogLevel18] | (string & {});

export const logLevel18Schema: EnumSchema<LogLevel18> = s.enumOf<LogLevel18>(LogLevel18);
