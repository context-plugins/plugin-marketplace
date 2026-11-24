import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfigSchema,
  type GoogleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfig,
} from "./google-cloud-apigee-v1-security-profile-v2-profile-assessment-config.js";
import { riskAssessmentTypeSchema, type RiskAssessmentType } from "./risk-assessment-type.js";

/** Security profile for risk assessment version 2. */
export type GoogleCloudApigeeV1SecurityProfileV2 = {
  /**
   * Required. The configuration for each assessment in this profile. Key is the name/id of the
   * assessment.
   */
  profileAssessmentConfigs?: Record<string, GoogleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfig>;
  /** Output only. The time of the security profile creation. */
  createTime?: string;
  /**
   * Identifier. Name of the security profile v2 resource. Format:
   * organizations/{org}/securityProfilesV2/{profile}
   */
  name?: string;
  /** Output only. Whether the security profile is google defined. */
  googleDefined?: boolean;
  /**
   * Optional. The risk assessment type of the security profile. Defaults to ADVANCED_API_SECURITY.
   */
  riskAssessmentType?: RiskAssessmentType;
  /** Optional. The description of the security profile. */
  description?: string;
  /** Output only. The time of the security profile update. */
  updateTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SecurityProfileV2Schema: Schema<GoogleCloudApigeeV1SecurityProfileV2> =
  s.object<GoogleCloudApigeeV1SecurityProfileV2>(
    {
      profileAssessmentConfigs: s.optional(
        s.record(
          s.string(),
          s.lazy(() => googleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfigSchema),
        ),
      ),
      createTime: s.optional(s.string()),
      name: s.optional(s.string()),
      googleDefined: s.optional(s.boolean()),
      riskAssessmentType: s.optional(s.lazy(() => riskAssessmentTypeSchema)),
      description: s.optional(s.string()),
      updateTime: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
