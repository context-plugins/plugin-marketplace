import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Risk assessment level */
export const RiskLevel1 = {
  Low: "Low",
  High: "High",
} as const;
export type RiskLevel1 = (typeof RiskLevel1)[keyof typeof RiskLevel1] | (string & {});

export const riskLevel1Schema: EnumSchema<RiskLevel1> = s.enumOf<RiskLevel1>(RiskLevel1);
