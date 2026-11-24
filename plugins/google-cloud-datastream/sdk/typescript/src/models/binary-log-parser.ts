import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logFileDirectories2Schema, type LogFileDirectories2 } from "./log-file-directories2.js";

/** Configuration to use Binary Log Parser CDC technique. */
export type BinaryLogParser = {
  /** Use Oracle directories. */
  logFileDirectories?: LogFileDirectories2;
  /** Use Oracle ASM. */
  oracleAsmLogFileAccess?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const binaryLogParserSchema: Schema<BinaryLogParser> = s.object<BinaryLogParser>(
  {
    logFileDirectories: s.optional(s.lazy(() => logFileDirectories2Schema)),
    oracleAsmLogFileAccess: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
