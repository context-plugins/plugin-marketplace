import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of logging that is enabled. */
export const LogType = {
  Audio: "AUDIO",
  Text: "TEXT",
} as const;
export type LogType = (typeof LogType)[keyof typeof LogType] | (string & {});

export const logTypeSchema: EnumSchema<LogType> = s.enumOf<LogType>(LogType);
