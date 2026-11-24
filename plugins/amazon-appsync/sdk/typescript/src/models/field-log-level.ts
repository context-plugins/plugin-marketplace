import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The field logging level. Values can be NONE, ERROR, or ALL. NONE: No field-level logs are
 * captured. ERROR: Logs the following information only for the fields that are in error: The error
 * section in the server response. Field-level errors. The generated request/response functions that
 * got resolved for error fields. ALL: The following information is logged for all fields in the
 * query: Field-level tracing information. The generated request/response functions that got
 * resolved for each field.
 */
export const FieldLogLevel = {
  None: "NONE",
  Error: "ERROR",
  All: "ALL",
  Info: "INFO",
  Debug: "DEBUG",
} as const;
export type FieldLogLevel = (typeof FieldLogLevel)[keyof typeof FieldLogLevel] | (string & {});

export const fieldLogLevelSchema: EnumSchema<FieldLogLevel> = s.enumOf<FieldLogLevel>(FieldLogLevel);
