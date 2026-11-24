import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Not returned; reserved for future use. */
export const Severity = {
  SeverityUnspecified: "SEVERITY_UNSPECIFIED",
  Warning: "WARNING",
  Error: "ERROR",
} as const;
export type Severity = (typeof Severity)[keyof typeof Severity] | (string & {});

export const severitySchema: EnumSchema<Severity> = s.enumOf<Severity>(Severity);
