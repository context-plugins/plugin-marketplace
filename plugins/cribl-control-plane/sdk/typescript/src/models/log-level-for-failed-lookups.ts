import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Log level to use when a DNS lookup fails. */
export const LogLevelForFailedLookups = {
  Silly: "silly",
  Debug: "debug",
  Info: "info",
  Warn: "warn",
  Error: "error",
} as const;
export type LogLevelForFailedLookups =
  | (typeof LogLevelForFailedLookups)[keyof typeof LogLevelForFailedLookups]
  | (string & {});

export const logLevelForFailedLookupsSchema: EnumSchema<LogLevelForFailedLookups> =
  s.enumOf<LogLevelForFailedLookups>(LogLevelForFailedLookups);
