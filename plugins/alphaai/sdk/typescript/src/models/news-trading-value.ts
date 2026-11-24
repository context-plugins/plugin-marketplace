import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actionabilitySchema, type Actionability } from "./actionability.js";

export type NewsTradingValue = {
  actionabilityScore?: Actionability;
  /**
   * How much NEW information the article carries (1–10), kept separate from relevance: a mega-cap
   * post-earnings recap is high relevance but low novelty. 0 on rows enriched before the field
   * existed.
   */
  informationNovelty?: number;
  timingRelevance?: string;
  marketSentimentAlignment?: string;
  estimatedReadTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const newsTradingValueProperties: s.Shape<NewsTradingValue> = {
  actionabilityScore: s.optional(s.lazy(() => actionabilitySchema)),
  informationNovelty: s.optional(s.int()),
  timingRelevance: s.optional(s.string()),
  marketSentimentAlignment: s.optional(s.string()),
  estimatedReadTime: s.optional(s.string()),
  _keysMap: {
    actionabilityScore: "actionability_score",
    informationNovelty: "information_novelty",
    timingRelevance: "timing_relevance",
    marketSentimentAlignment: "market_sentiment_alignment",
    estimatedReadTime: "estimated_read_time",
  },
};

export const newsTradingValueInternalSchema: Schema<NewsTradingValue> = s.object<NewsTradingValue>(
  newsTradingValueProperties,
  { additionalProperties: s.json() },
);

export const newsTradingValueSchema: Schema<NewsTradingValue> = s.lazySchema(() =>
  s.object<NewsTradingValue>(
    {
      ...newsTradingValueProperties,
      informationNovelty: s.optional(s.int().check(s.gte(0), s.lte(10))),
    },
    { additionalProperties: s.json() },
  ),
);
