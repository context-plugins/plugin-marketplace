import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sentimentScoreSchema, type SentimentScore } from "./sentiment-score.js";
import { sentimentSchema, type Sentiment } from "./sentiment.js";

export type BatchDetectSentimentItemResult = {
  /** The zero-based index of the document in the input list. */
  index?: number;
  /** The sentiment detected in the document. */
  sentiment?: Sentiment;
  sentimentScore?: SentimentScore;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchDetectSentimentItemResultSchema: Schema<BatchDetectSentimentItemResult> =
  s.object<BatchDetectSentimentItemResult>(
    {
      index: s.optional(s.int()),
      sentiment: s.optional(s.lazy(() => sentimentSchema)),
      sentimentScore: s.optional(s.lazy(() => sentimentScoreSchema)),
      _keysMap: {
        index: "Index",
        sentiment: "Sentiment",
        sentimentScore: "SentimentScore",
      },
    },
    { additionalProperties: s.json() },
  );
