import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Severity of the ticket. */
export const Severity1 = {
  Low: "low",
  Normal: "normal",
  High: "high",
  Urgent: "urgent",
} as const;
export type Severity1 = (typeof Severity1)[keyof typeof Severity1] | (string & {});

export const severity1Schema: EnumSchema<Severity1> = s.enumOf<Severity1>(Severity1);
