import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Optional. The risk assessment type of the security profile. Defaults to ADVANCED_API_SECURITY.
 */
export const RiskAssessmentType = {
  RiskAssessmentTypeUnspecified: "RISK_ASSESSMENT_TYPE_UNSPECIFIED",
  Apigee: "APIGEE",
  ApiHub: "API_HUB",
} as const;
export type RiskAssessmentType = (typeof RiskAssessmentType)[keyof typeof RiskAssessmentType] | (string & {});

export const riskAssessmentTypeSchema: EnumSchema<RiskAssessmentType> =
  s.enumOf<RiskAssessmentType>(RiskAssessmentType);
