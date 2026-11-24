import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of logging to enable. Text logs are delivered to a CloudWatch Logs log group. Audio logs
 * are delivered to an S3 bucket.
 */
export const LogType1 = {
  Audio: "AUDIO",
  Text: "TEXT",
} as const;
export type LogType1 = (typeof LogType1)[keyof typeof LogType1] | (string & {});

export const logType1Schema: EnumSchema<LogType1> = s.enumOf<LogType1>(LogType1);
