import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Severity = {
  Low: "low",
  Medium: "medium",
  High: "high",
  Critical: "critical",
} as const;
export type Severity = (typeof Severity)[keyof typeof Severity] | (string & {});

export const severitySchema: EnumSchema<Severity> = s.enumOf<Severity>(Severity);
