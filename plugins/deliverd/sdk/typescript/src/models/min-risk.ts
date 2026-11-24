import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MinRisk = {
  Low: "low",
  Medium: "medium",
  High: "high",
  Critical: "critical",
} as const;
export type MinRisk = (typeof MinRisk)[keyof typeof MinRisk] | (string & {});

export const minRiskSchema: EnumSchema<MinRisk> = s.enumOf<MinRisk>(MinRisk);
