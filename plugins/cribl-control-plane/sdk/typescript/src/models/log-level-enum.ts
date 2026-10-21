import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Collector runtime log level */
export const LogLevelEnum = {
  Error: "error",
  Warn: "warn",
  Info: "info",
  Debug: "debug",
} as const;
export type LogLevelEnum = (typeof LogLevelEnum)[keyof typeof LogLevelEnum] | (string & {});

export const logLevelEnumSchema: EnumSchema<LogLevelEnum> = s.enumOf<LogLevelEnum>(LogLevelEnum);
