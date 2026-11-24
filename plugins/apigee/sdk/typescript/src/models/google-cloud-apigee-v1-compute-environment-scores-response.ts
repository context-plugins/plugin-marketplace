import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1ScoreSchema,
  type GoogleCloudApigeeV1Score,
} from "./google-cloud-apigee-v1-score.js";

/** Response for ComputeEnvironmentScores. */
export type GoogleCloudApigeeV1ComputeEnvironmentScoresResponse = {
  /**
   * A page token, received from a previous `ComputeScore` call. Provide this to retrieve the
   * subsequent page.
   */
  nextPageToken?: string;
  /** List of scores. One score per day. */
  scores?: GoogleCloudApigeeV1Score[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ComputeEnvironmentScoresResponseSchema: Schema<GoogleCloudApigeeV1ComputeEnvironmentScoresResponse> =
  s.object<GoogleCloudApigeeV1ComputeEnvironmentScoresResponse>(
    {
      nextPageToken: s.optional(s.string()),
      scores: s.optional(s.array(s.lazy(() => googleCloudApigeeV1ScoreSchema))),
    },
    { additionalProperties: s.json() },
  );
