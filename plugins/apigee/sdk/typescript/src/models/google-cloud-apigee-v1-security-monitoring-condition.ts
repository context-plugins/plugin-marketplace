import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArray1Schema,
  type GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArray1,
} from "./google-cloud-apigee-v1-batch-compute-security-assessment-results-request-resource-array1.js";
import { riskAssessmentType1Schema, type RiskAssessmentType1 } from "./risk-assessment-type1.js";

/** Security monitoring condition for risk assessment version 2. */
export type GoogleCloudApigeeV1SecurityMonitoringCondition = {
  /** Include all resources under the scope. */
  includeAllResources?: Record<string, unknown>;
  /** Output only. Total number of deployed resources within scope. */
  totalDeployedResources?: number;
  /**
   * Optional. The API Hub gateway monitored by the security monitoring condition. This should only
   * be set if risk_assessment_type is API_HUB. Format:
   * `projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}`
   */
  apiHubGateway?: string;
  /** Include only these resources. */
  include?: GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArray1;
  /** Output only. The time of the security monitoring condition creation. */
  createTime?: string;
  /** Required. ID of security profile of the security monitoring condition. */
  profile?: string;
  /**
   * Optional. The risk assessment type of the security monitoring condition. Defaults to
   * ADVANCED_API_SECURITY.
   */
  riskAssessmentType?: RiskAssessmentType1;
  /**
   * Identifier. Name of the security monitoring condition resource. Format:
   * organizations/{org}/securityMonitoringConditions/{security_monitoring_condition}
   */
  name?: string;
  /** Output only. Total number of monitored resources within this condition. */
  totalMonitoredResources?: number;
  /** Output only. The time of the security monitoring condition update. */
  updateTime?: string;
  /**
   * Optional. Scope of the security monitoring condition. When RiskAssessmentType is APIGEE, the
   * scope should be set to the environment of the resources. When RiskAssessmentType is API_HUB,
   * the scope should not be set.
   */
  scope?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SecurityMonitoringConditionSchema: Schema<GoogleCloudApigeeV1SecurityMonitoringCondition> =
  s.object<GoogleCloudApigeeV1SecurityMonitoringCondition>(
    {
      includeAllResources: s.optional(s.record(s.string(), s.unknown())),
      totalDeployedResources: s.optional(s.int()),
      apiHubGateway: s.optional(s.string()),
      include: s.optional(
        s.lazy(() => googleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArray1Schema),
      ),
      createTime: s.optional(s.string()),
      profile: s.optional(s.string()),
      riskAssessmentType: s.optional(s.lazy(() => riskAssessmentType1Schema)),
      name: s.optional(s.string()),
      totalMonitoredResources: s.optional(s.int()),
      updateTime: s.optional(s.string()),
      scope: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
