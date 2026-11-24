import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Severity = {
  SeverityUnspecified: "SEVERITY_UNSPECIFIED",
  Low: "LOW",
  Medium: "MEDIUM",
  High: "HIGH",
  Minimal: "MINIMAL",
} as const;
export type Severity = (typeof Severity)[keyof typeof Severity] | (string & {});

export const severitySchema: EnumSchema<Severity> = s.enumOf<Severity>(Severity);
