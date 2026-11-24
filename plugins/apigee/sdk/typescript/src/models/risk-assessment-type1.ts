import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Optional. The risk assessment type of the security monitoring condition. Defaults to
 * ADVANCED_API_SECURITY.
 */
export const RiskAssessmentType1 = {
  RiskAssessmentTypeUnspecified: "RISK_ASSESSMENT_TYPE_UNSPECIFIED",
  Apigee: "APIGEE",
  ApiHub: "API_HUB",
} as const;
export type RiskAssessmentType1 =
  | (typeof RiskAssessmentType1)[keyof typeof RiskAssessmentType1]
  | (string & {});

export const riskAssessmentType1Schema: EnumSchema<RiskAssessmentType1> =
  s.enumOf<RiskAssessmentType1>(RiskAssessmentType1);
