import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. Severity of the issue. */
export const Severity1 = {
  SeverityUnspecified: "SEVERITY_UNSPECIFIED",
  SeverityError: "SEVERITY_ERROR",
  SeverityWarning: "SEVERITY_WARNING",
  SeverityInfo: "SEVERITY_INFO",
  SeverityHint: "SEVERITY_HINT",
} as const;
export type Severity1 = (typeof Severity1)[keyof typeof Severity1] | (string & {});

export const severity1Schema: EnumSchema<Severity1> = s.enumOf<Severity1>(Severity1);
