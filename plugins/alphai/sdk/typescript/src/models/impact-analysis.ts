import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { confidenceSchema, type Confidence } from "./confidence.js";
import { sentimentSchema, type Sentiment } from "./sentiment.js";

export type ImpactAnalysis = {
  summary?: string;
  sentiment?: Sentiment;
  priceImpactPrediction?: string;
  confidence?: Confidence;
  reasoning?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const impactAnalysisSchema: Schema<ImpactAnalysis> = s.object<ImpactAnalysis>(
  {
    summary: s.optional(s.string()),
    sentiment: s.optional(s.lazy(() => sentimentSchema)),
    priceImpactPrediction: s.optional(s.string()),
    confidence: s.optional(s.lazy(() => confidenceSchema)),
    reasoning: s.optional(s.string()),
    _keysMap: {
      priceImpactPrediction: "price_impact_prediction",
    },
  },
  { additionalProperties: s.json() },
);
