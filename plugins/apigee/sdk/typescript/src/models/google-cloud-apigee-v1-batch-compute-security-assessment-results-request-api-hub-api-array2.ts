import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An array of API Hub APIs to assess. A maximum of 1 API can be assessed. */
export type GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubApiArray2 = {
  /**
   * Required. The array of API Hub API IDs. Format:
   * `projects/{project}/locations/{location}/apis/{api}`
   */
  apis?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubApiArray2Schema: Schema<GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubApiArray2> =
  s.object<GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubApiArray2>(
    {
      apis: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
