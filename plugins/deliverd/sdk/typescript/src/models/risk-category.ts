import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** What kind of harm this risks */
export const RiskCategory = {
  Financial: "financial",
  Data: "data",
  Communication: "communication",
  Infrastructure: "infrastructure",
  Identity: "identity",
  Other: "other",
} as const;
export type RiskCategory = (typeof RiskCategory)[keyof typeof RiskCategory] | (string & {});

export const riskCategorySchema: EnumSchema<RiskCategory> = s.enumOf<RiskCategory>(RiskCategory);
