import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dailySentimentBucketSchema, type DailySentimentBucket } from "./daily-sentiment-bucket.js";

export type TickerSentimentSummary = {
  ticker: string;
  days: number;
  /** Articles with a sentiment call in the window — the sum of the `daily` buckets. */
  total: number;
  bullish: number;
  neutral: number;
  bearish: number;
  daily: DailySentimentBucket[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tickerSentimentSummarySchema: Schema<TickerSentimentSummary> = s.object<TickerSentimentSummary>(
  {
    ticker: s.string(),
    days: s.int(),
    total: s.int(),
    bullish: s.int(),
    neutral: s.int(),
    bearish: s.int(),
    daily: s.array(s.lazy(() => dailySentimentBucketSchema)),
  },
  { additionalProperties: s.json() },
);
