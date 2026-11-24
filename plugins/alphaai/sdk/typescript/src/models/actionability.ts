import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Actionability = {
  High: "high",
  Medium: "medium",
  Low: "low",
  Negligible: "negligible",
} as const;
export type Actionability = (typeof Actionability)[keyof typeof Actionability] | (string & {});

export const actionabilitySchema: EnumSchema<Actionability> = s.enumOf<Actionability>(Actionability);
