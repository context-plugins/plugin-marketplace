import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Log Level (verbosity) for collection runtime behavior. */
export const LogLevel16 = {
  Error: "error",
  Warn: "warn",
  Info: "info",
  Debug: "debug",
  Silly: "silly",
} as const;
export type LogLevel16 = (typeof LogLevel16)[keyof typeof LogLevel16] | (string & {});

export const logLevel16Schema: EnumSchema<LogLevel16> = s.enumOf<LogLevel16>(LogLevel16);
