import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. Risk level of the incident. */
export const RiskLevel = {
  RiskLevelUnspecified: "RISK_LEVEL_UNSPECIFIED",
  Low: "LOW",
  Moderate: "MODERATE",
  Severe: "SEVERE",
} as const;
export type RiskLevel = (typeof RiskLevel)[keyof typeof RiskLevel] | (string & {});

export const riskLevelSchema: EnumSchema<RiskLevel> = s.enumOf<RiskLevel>(RiskLevel);
