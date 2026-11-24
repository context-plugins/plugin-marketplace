import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sentimentScoreSchema, type SentimentScore } from "./sentiment-score.js";
import { sentiment1Schema, type Sentiment1 } from "./sentiment1.js";

export type MentionSentiment = {
  /** The sentiment of the mention. */
  sentiment?: Sentiment1;
  sentimentScore?: SentimentScore;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mentionSentimentSchema: Schema<MentionSentiment> = s.object<MentionSentiment>(
  {
    sentiment: s.optional(s.lazy(() => sentiment1Schema)),
    sentimentScore: s.optional(s.lazy(() => sentimentScoreSchema)),
    _keysMap: {
      sentiment: "Sentiment",
      sentimentScore: "SentimentScore",
    },
  },
  { additionalProperties: s.json() },
);
