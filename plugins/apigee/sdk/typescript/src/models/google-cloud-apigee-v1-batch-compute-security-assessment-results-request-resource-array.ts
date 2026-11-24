import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArrayResourceSchema,
  type GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArrayResource,
} from "./google-cloud-apigee-v1-batch-compute-security-assessment-results-request-resource-array-resource.js";

/** Message for the array of resources. For Apigee, the proxies are resources. */
export type GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArray = {
  /** Required. The array of resources. For Apigee, the proxies are resources. */
  resources?: GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArrayResource[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArraySchema: Schema<GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArray> =
  s.object<GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArray>(
    {
      resources: s.optional(
        s.array(
          s.lazy(() =>
            googleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArrayResourceSchema,
          ),
        ),
      ),
    },
    { additionalProperties: s.json() },
  );
