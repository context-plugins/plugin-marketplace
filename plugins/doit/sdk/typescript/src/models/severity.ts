import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Severity of the recipe's results, set by the recipe's author. */
export const Severity = {
  Critical: "critical",
  High: "high",
  Medium: "medium",
  Low: "low",
} as const;
export type Severity = (typeof Severity)[keyof typeof Severity] | (string & {});

export const severitySchema: EnumSchema<Severity> = s.enumOf<Severity>(Severity);
