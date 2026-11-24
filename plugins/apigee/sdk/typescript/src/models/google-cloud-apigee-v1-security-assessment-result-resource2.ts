import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiHubGatewayTypeSchema, type ApiHubGatewayType } from "./api-hub-gateway-type.js";
import {
  googleCloudApigeeV1SecurityAssessmentResultResourceApiHubDeploymentDetails2Schema,
  type GoogleCloudApigeeV1SecurityAssessmentResultResourceApiHubDeploymentDetails2,
} from "./google-cloud-apigee-v1-security-assessment-result-resource-api-hub-deployment-details2.js";
import { type1Schema, type Type1 } from "./type1.js";

/** The assessed resource. */
export type GoogleCloudApigeeV1SecurityAssessmentResultResource2 = {
  /** Optional. */
  apiHubGatewayType?: ApiHubGatewayType;
  /** Output only. Additional details for the API Hub deployment. */
  apiHubDeploymentDetails?: GoogleCloudApigeeV1SecurityAssessmentResultResourceApiHubDeploymentDetails2;
  /** Required. Type of this resource. */
  type?: Type1;
  /**
   * Required. Name of this resource. For an Apigee API Proxy, this should be the id of the API
   * proxy. For an API Hub Deployment, this should be the id of the deployment.
   */
  name?: string;
  /** The revision id for the resource. In case of Apigee, this is proxy revision id. */
  resourceRevisionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SecurityAssessmentResultResource2Schema: Schema<GoogleCloudApigeeV1SecurityAssessmentResultResource2> =
  s.object<GoogleCloudApigeeV1SecurityAssessmentResultResource2>(
    {
      apiHubGatewayType: s.optional(s.lazy(() => apiHubGatewayTypeSchema)),
      apiHubDeploymentDetails: s.optional(
        s.lazy(() => googleCloudApigeeV1SecurityAssessmentResultResourceApiHubDeploymentDetails2Schema),
      ),
      type: s.optional(s.lazy(() => type1Schema)),
      name: s.optional(s.string()),
      resourceRevisionId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
