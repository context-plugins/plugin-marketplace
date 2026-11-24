import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";

/** Resource for which we are computing security assessment. */
export type GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArrayResource = {
  /**
   * Required. Name of this resource. For an Apigee API Proxy, this should be the id of the API
   * proxy. For an API Hub Deployment, this should be the id of the deployment.
   */
  name?: string;
  /** Required. Type of this resource. */
  type?: Type1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArrayResourceSchema: Schema<GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArrayResource> =
  s.object<GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArrayResource>(
    {
      name: s.optional(s.string()),
      type: s.optional(s.lazy(() => type1Schema)),
    },
    { additionalProperties: s.json() },
  );
