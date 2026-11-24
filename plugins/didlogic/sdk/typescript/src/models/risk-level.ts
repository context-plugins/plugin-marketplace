import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RiskLevel = {
  Low: "Low",
  High: "High",
} as const;
export type RiskLevel = (typeof RiskLevel)[keyof typeof RiskLevel] | (string & {});

export const riskLevelSchema: EnumSchema<RiskLevel> = s.enumOf<RiskLevel>(RiskLevel);
