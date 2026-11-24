import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of information to log for the Event API. */
export const LogLevelEnum = {
  None: "NONE",
  Error: "ERROR",
  All: "ALL",
  Info: "INFO",
  Debug: "DEBUG",
} as const;
export type LogLevelEnum = (typeof LogLevelEnum)[keyof typeof LogLevelEnum] | (string & {});

export const logLevelEnumSchema: EnumSchema<LogLevelEnum> = s.enumOf<LogLevelEnum>(LogLevelEnum);
