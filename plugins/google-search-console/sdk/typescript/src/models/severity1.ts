import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Severity of this issue: WARNING, or ERROR. Items with an issue of status ERROR cannot appear with
 * rich result features in Google Search results.
 */
export const Severity1 = {
  SeverityUnspecified: "SEVERITY_UNSPECIFIED",
  Warning: "WARNING",
  Error: "ERROR",
} as const;
export type Severity1 = (typeof Severity1)[keyof typeof Severity1] | (string & {});

export const severity1Schema: EnumSchema<Severity1> = s.enumOf<Severity1>(Severity1);
