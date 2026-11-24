import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RiskAssessmentType2 = {
  RiskAssessmentTypeUnspecified: "RISK_ASSESSMENT_TYPE_UNSPECIFIED",
  Apigee: "APIGEE",
  ApiHub: "API_HUB",
} as const;
export type RiskAssessmentType2 =
  | (typeof RiskAssessmentType2)[keyof typeof RiskAssessmentType2]
  | (string & {});

export const riskAssessmentType2Schema: EnumSchema<RiskAssessmentType2> =
  s.enumOf<RiskAssessmentType2>(RiskAssessmentType2);
