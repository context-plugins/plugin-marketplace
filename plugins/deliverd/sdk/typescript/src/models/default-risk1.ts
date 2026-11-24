import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DefaultRisk1 = {
  Low: "low",
  Medium: "medium",
  High: "high",
  Critical: "critical",
} as const;
export type DefaultRisk1 = (typeof DefaultRisk1)[keyof typeof DefaultRisk1] | (string & {});

export const defaultRisk1Schema: EnumSchema<DefaultRisk1> = s.enumOf<DefaultRisk1>(DefaultRisk1);
