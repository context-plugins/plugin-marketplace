import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1ScoreComponentRecommendationSchema,
  type GoogleCloudApigeeV1ScoreComponentRecommendation,
} from "./google-cloud-apigee-v1-score-component-recommendation.js";

/** Component containing score, recommendations and actions. */
export type GoogleCloudApigeeV1ScoreComponent2 = {
  /** List of recommendations to improve API security. */
  recommendations?: GoogleCloudApigeeV1ScoreComponentRecommendation[];
  /** Path of the component. Example: /org@myorg/envgroup@myenvgroup/proxies/proxy@myproxy */
  scorePath?: string;
  /** Time when score was calculated. */
  calculateTime?: string;
  /** Score for the component. */
  score?: number;
  /** Time in the requested time period when data was last captured to compute the score. */
  dataCaptureTime?: string;
  /** List of paths for next components. */
  drilldownPaths?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ScoreComponent2Schema: Schema<GoogleCloudApigeeV1ScoreComponent2> =
  s.object<GoogleCloudApigeeV1ScoreComponent2>(
    {
      recommendations: s.optional(
        s.array(s.lazy(() => googleCloudApigeeV1ScoreComponentRecommendationSchema)),
      ),
      scorePath: s.optional(s.string()),
      calculateTime: s.optional(s.string()),
      score: s.optional(s.int()),
      dataCaptureTime: s.optional(s.string()),
      drilldownPaths: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
