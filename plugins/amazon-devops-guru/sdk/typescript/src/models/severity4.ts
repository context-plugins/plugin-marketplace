import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Severity4 = {
  Low: "LOW",
  Medium: "MEDIUM",
  High: "HIGH",
} as const;
export type Severity4 = (typeof Severity4)[keyof typeof Severity4] | (string & {});

export const severity4Schema: EnumSchema<Severity4> = s.enumOf<Severity4>(Severity4);
