import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { impactAnalysisSchema, type ImpactAnalysis } from "./impact-analysis.js";

export type TickerAnalysis = {
  ticker?: string;
  relevanceContext?: string;
  impactAnalysis?: ImpactAnalysis;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tickerAnalysisSchema: Schema<TickerAnalysis> = s.object<TickerAnalysis>(
  {
    ticker: s.optional(s.string()),
    relevanceContext: s.optional(s.string()),
    impactAnalysis: s.optional(s.lazy(() => impactAnalysisSchema)),
    _keysMap: {
      relevanceContext: "relevance_context",
      impactAnalysis: "impact_analysis",
    },
  },
  { additionalProperties: s.json() },
);
