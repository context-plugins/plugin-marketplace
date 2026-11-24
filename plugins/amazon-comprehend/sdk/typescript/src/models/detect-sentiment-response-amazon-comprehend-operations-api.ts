import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  sentimentAmazonComprehendOperationsApiSchema,
  type SentimentAmazonComprehendOperationsApi,
} from "./sentiment-amazon-comprehend-operations-api.js";
import { sentimentScoreSchema, type SentimentScore } from "./sentiment-score.js";

export type DetectSentimentResponseAmazonComprehendOperationsApi = {
  /** The inferred sentiment that Amazon Comprehend has the highest level of confidence in. */
  sentiment?: SentimentAmazonComprehendOperationsApi;
  sentimentScore?: SentimentScore;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectSentimentResponseAmazonComprehendOperationsApiSchema: Schema<DetectSentimentResponseAmazonComprehendOperationsApi> =
  s.object<DetectSentimentResponseAmazonComprehendOperationsApi>(
    {
      sentiment: s.optional(s.lazy(() => sentimentAmazonComprehendOperationsApiSchema)),
      sentimentScore: s.optional(s.lazy(() => sentimentScoreSchema)),
      _keysMap: {
        sentiment: "Sentiment",
        sentimentScore: "SentimentScore",
      },
    },
    { additionalProperties: s.json() },
  );
