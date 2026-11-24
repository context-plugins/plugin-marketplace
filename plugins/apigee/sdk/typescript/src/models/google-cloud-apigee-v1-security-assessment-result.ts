import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1SecurityAssessmentResultResource2Schema,
  type GoogleCloudApigeeV1SecurityAssessmentResultResource2,
} from "./google-cloud-apigee-v1-security-assessment-result-resource2.js";
import {
  googleCloudApigeeV1SecurityAssessmentResultScoringResultSchema,
  type GoogleCloudApigeeV1SecurityAssessmentResultScoringResult,
} from "./google-cloud-apigee-v1-security-assessment-result-scoring-result.js";
import { googleRpcStatus2Schema, type GoogleRpcStatus2 } from "./google-rpc-status2.js";

/** The security assessment result for one resource. */
export type GoogleCloudApigeeV1SecurityAssessmentResult = {
  /** The assessed resource. */
  resource?: GoogleCloudApigeeV1SecurityAssessmentResultResource2;
  /** The result of the assessment. */
  scoringResult?: GoogleCloudApigeeV1SecurityAssessmentResultScoringResult;
  /** The error status if scoring fails. */
  error?: GoogleRpcStatus2;
  /**
   * The time of the assessment of this resource. This could lag behind `assessment_time` due to
   * caching within the backend.
   */
  createTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SecurityAssessmentResultSchema: Schema<GoogleCloudApigeeV1SecurityAssessmentResult> =
  s.object<GoogleCloudApigeeV1SecurityAssessmentResult>(
    {
      resource: s.optional(s.lazy(() => googleCloudApigeeV1SecurityAssessmentResultResource2Schema)),
      scoringResult: s.optional(s.lazy(() => googleCloudApigeeV1SecurityAssessmentResultScoringResultSchema)),
      error: s.optional(s.lazy(() => googleRpcStatus2Schema)),
      createTime: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
