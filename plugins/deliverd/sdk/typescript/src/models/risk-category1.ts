import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RiskCategory1 = {
  Financial: "financial",
  Data: "data",
  Communication: "communication",
  Infrastructure: "infrastructure",
  Identity: "identity",
  Other: "other",
} as const;
export type RiskCategory1 = (typeof RiskCategory1)[keyof typeof RiskCategory1] | (string & {});

export const riskCategory1Schema: EnumSchema<RiskCategory1> = s.enumOf<RiskCategory1>(RiskCategory1);
