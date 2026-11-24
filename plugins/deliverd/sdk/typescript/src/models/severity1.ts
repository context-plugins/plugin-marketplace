import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** high or critical closes the governance gate until a person resolves it */
export const Severity1 = {
  Low: "low",
  Medium: "medium",
  High: "high",
  Critical: "critical",
} as const;
export type Severity1 = (typeof Severity1)[keyof typeof Severity1] | (string & {});

export const severity1Schema: EnumSchema<Severity1> = s.enumOf<Severity1>(Severity1);
