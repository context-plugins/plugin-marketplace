import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logFileDirectories2Schema, type LogFileDirectories2 } from "./log-file-directories2.js";

/** Use Binary Log Parser. */
export type BinaryLogParser2 = {
  /** Use Oracle directories. */
  logFileDirectories?: LogFileDirectories2;
  /** Use Oracle ASM. */
  oracleAsmLogFileAccess?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const binaryLogParser2Schema: Schema<BinaryLogParser2> = s.object<BinaryLogParser2>(
  {
    logFileDirectories: s.optional(s.lazy(() => logFileDirectories2Schema)),
    oracleAsmLogFileAccess: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
