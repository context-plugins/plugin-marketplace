import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. The output format of the Dataproc Metastore service's logs. */
export const LogFormat = {
  LogFormatUnspecified: "LOG_FORMAT_UNSPECIFIED",
  Legacy: "LEGACY",
  Json: "JSON",
} as const;
export type LogFormat = (typeof LogFormat)[keyof typeof LogFormat] | (string & {});

export const logFormatSchema: EnumSchema<LogFormat> = s.enumOf<LogFormat>(LogFormat);
