import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Message for the array of API Hub APIs. */
export type GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubApiArray = {
  /**
   * Required. The array of API Hub API IDs. Format:
   * `projects/{project}/locations/{location}/apis/{api}`
   */
  apis?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubApiArraySchema: Schema<GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubApiArray> =
  s.object<GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubApiArray>(
    {
      apis: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
