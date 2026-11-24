import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfigApiHubGatewayTypeArray2Schema,
  type GoogleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfigApiHubGatewayTypeArray2,
} from "./google-cloud-apigee-v1-security-profile-v2-profile-assessment-config-api-hub-gateway-type-array2.js";
import { weightSchema, type Weight } from "./weight.js";

/** The configuration definition for a specific assessment. */
export type GoogleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfig = {
  /** Include only these Gateway Types. */
  include?: GoogleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfigApiHubGatewayTypeArray2;
  /** The weight of the assessment. */
  weight?: Weight;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfigSchema: Schema<GoogleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfig> =
  s.object<GoogleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfig>(
    {
      include: s.optional(
        s.lazy(() =>
          googleCloudApigeeV1SecurityProfileV2ProfileAssessmentConfigApiHubGatewayTypeArray2Schema,
        ),
      ),
      weight: s.optional(s.lazy(() => weightSchema)),
    },
    { additionalProperties: s.json() },
  );
