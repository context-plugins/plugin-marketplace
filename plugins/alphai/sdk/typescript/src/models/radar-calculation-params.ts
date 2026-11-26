import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RadarCalculationParams = {
  effectiveAt: number;
  windowSeconds: number;
  baselineSeconds: number;
  halfLifeSeconds: number;
  minRelevance: number;
  maxStoryTickers: number;
  priorStories: number;
  minBaselineStories: number;
  minBaselineDays: number;
  minSentimentStories: number;
  minSentimentCoverage: number;
  spikeTail: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const radarCalculationParamsSchema: Schema<RadarCalculationParams> = s.object<RadarCalculationParams>(
  {
    effectiveAt: s.int(),
    windowSeconds: s.int(),
    baselineSeconds: s.int(),
    halfLifeSeconds: s.int(),
    minRelevance: s.int(),
    maxStoryTickers: s.int(),
    priorStories: s.float64(),
    minBaselineStories: s.int(),
    minBaselineDays: s.int(),
    minSentimentStories: s.int(),
    minSentimentCoverage: s.float64(),
    spikeTail: s.float64(),
    _keysMap: {
      effectiveAt: "effective_at",
      windowSeconds: "window_seconds",
      baselineSeconds: "baseline_seconds",
      halfLifeSeconds: "half_life_seconds",
      minRelevance: "min_relevance",
      maxStoryTickers: "max_story_tickers",
      priorStories: "prior_stories",
      minBaselineStories: "min_baseline_stories",
      minBaselineDays: "min_baseline_days",
      minSentimentStories: "min_sentiment_stories",
      minSentimentCoverage: "min_sentiment_coverage",
      spikeTail: "spike_tail",
    },
  },
  { additionalProperties: s.json() },
);
