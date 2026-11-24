import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The log type that this config enables. */
export const LogType = {
  LogTypeUnspecified: "LOG_TYPE_UNSPECIFIED",
  AdminRead: "ADMIN_READ",
  DataWrite: "DATA_WRITE",
  DataRead: "DATA_READ",
} as const;
export type LogType = (typeof LogType)[keyof typeof LogType] | (string & {});

export const logTypeSchema: EnumSchema<LogType> = s.enumOf<LogType>(LogType);
