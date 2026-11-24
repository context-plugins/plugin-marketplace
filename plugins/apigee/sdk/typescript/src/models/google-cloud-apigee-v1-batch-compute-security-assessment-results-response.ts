import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1SecurityAssessmentResultSchema,
  type GoogleCloudApigeeV1SecurityAssessmentResult,
} from "./google-cloud-apigee-v1-security-assessment-result.js";

/** Response for BatchComputeSecurityAssessmentResults. */
export type GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsResponse = {
  /** The time of the assessment api call. */
  assessmentTime?: string;
  /**
   * A token that can be sent as `page_token` to retrieve the next page. If this field is blank,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Default sort order is by resource name in alphabetic order. */
  securityAssessmentResults?: GoogleCloudApigeeV1SecurityAssessmentResult[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1BatchComputeSecurityAssessmentResultsResponseSchema: Schema<GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsResponse> =
  s.object<GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsResponse>(
    {
      assessmentTime: s.optional(s.string()),
      nextPageToken: s.optional(s.string()),
      securityAssessmentResults: s.optional(
        s.array(s.lazy(() => googleCloudApigeeV1SecurityAssessmentResultSchema)),
      ),
    },
    { additionalProperties: s.json() },
  );
