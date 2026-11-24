import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A value of ERROR means that you cannot create or update a state machine with this definition.
 * WARNING level diagnostics alert you to potential issues, but they will not prevent you from
 * creating or updating your state machine.
 */
export const Severity = {
  Error: "ERROR",
  Warning: "WARNING",
} as const;
export type Severity = (typeof Severity)[keyof typeof Severity] | (string & {});

export const severitySchema: EnumSchema<Severity> = s.enumOf<Severity>(Severity);
