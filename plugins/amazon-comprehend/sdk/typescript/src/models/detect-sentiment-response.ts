import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sentimentScoreSchema, type SentimentScore } from "./sentiment-score.js";
import { sentiment2Schema, type Sentiment2 } from "./sentiment2.js";

export type DetectSentimentResponse = {
  /** The inferred sentiment that Amazon Comprehend has the highest level of confidence in. */
  sentiment?: Sentiment2;
  sentimentScore?: SentimentScore;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectSentimentResponseSchema: Schema<DetectSentimentResponse> =
  s.object<DetectSentimentResponse>(
    {
      sentiment: s.optional(s.lazy(() => sentiment2Schema)),
      sentimentScore: s.optional(s.lazy(() => sentimentScoreSchema)),
      _keysMap: {
        sentiment: "Sentiment",
        sentimentScore: "SentimentScore",
      },
    },
    { additionalProperties: s.json() },
  );
