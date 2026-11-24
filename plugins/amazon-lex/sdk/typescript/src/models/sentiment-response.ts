import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sentimentScoreSchema, type SentimentScore } from "./sentiment-score.js";
import { sentimentSchema, type Sentiment } from "./sentiment.js";

export type SentimentResponse = {
  /**
   * The overall sentiment expressed in the user's response. This is the sentiment most likely
   * expressed by the user based on the analysis by Amazon Comprehend.
   */
  sentiment?: Sentiment;
  sentimentScore?: SentimentScore;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sentimentResponseSchema: Schema<SentimentResponse> = s.object<SentimentResponse>(
  {
    sentiment: s.optional(s.lazy(() => sentimentSchema)),
    sentimentScore: s.optional(s.lazy(() => sentimentScoreSchema)),
  },
  { additionalProperties: s.json() },
);
