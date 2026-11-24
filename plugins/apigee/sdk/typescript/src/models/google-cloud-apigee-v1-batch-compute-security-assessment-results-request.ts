import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubApiArray2Schema,
  type GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubApiArray2,
} from "./google-cloud-apigee-v1-batch-compute-security-assessment-results-request-api-hub-api-array2.js";
import {
  googleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubGatewayArray2Schema,
  type GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubGatewayArray2,
} from "./google-cloud-apigee-v1-batch-compute-security-assessment-results-request-api-hub-gateway-array2.js";
import {
  googleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArray1Schema,
  type GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArray1,
} from "./google-cloud-apigee-v1-batch-compute-security-assessment-results-request-resource-array1.js";

/** Request for BatchComputeSecurityAssessmentResults. */
export type GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequest = {
  /** Include all resources under the scope. */
  includeAllResources?: Record<string, unknown>;
  /** Required. Name of the profile that is used for computation. */
  profile?: string;
  /**
   * Optional. Scope of the resources for the computation. When computing scores for Apigee proxies,
   * the scope should be set to the environment of the resources. When computing scores for API Hub
   * deployments, api_hub_scope should be set instead.
   */
  scope?: string;
  /**
   * Optional. A page token, received from a previous `BatchComputeSecurityAssessmentResults` call.
   * Provide this to retrieve the subsequent page.
   */
  pageToken?: string;
  /** An array of API Hub APIs to assess. A maximum of 1 API can be assessed. */
  apiHubApis?: GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubApiArray2;
  /**
   * Optional. The maximum number of results to return. The service may return fewer than this
   * value. If unspecified, at most 50 results will be returned.
   */
  pageSize?: number;
  /** Include only these resources. */
  include?: GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArray1;
  /** An array of API Hub Gateways to assess. A maximum of 3 gateways can be assessed. */
  apiHubGateways?: GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubGatewayArray2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestSchema: Schema<GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequest> =
  s.object<GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequest>(
    {
      includeAllResources: s.optional(s.record(s.string(), s.unknown())),
      profile: s.optional(s.string()),
      scope: s.optional(s.string()),
      pageToken: s.optional(s.string()),
      apiHubApis: s.optional(
        s.lazy(() => googleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubApiArray2Schema),
      ),
      pageSize: s.optional(s.int()),
      include: s.optional(
        s.lazy(() => googleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArray1Schema),
      ),
      apiHubGateways: s.optional(
        s.lazy(() =>
          googleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubGatewayArray2Schema,
        ),
      ),
    },
    { additionalProperties: s.json() },
  );
