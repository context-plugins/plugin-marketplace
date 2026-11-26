import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { alternativePerspectivesSchema, type AlternativePerspectives } from "./alternative-perspectives.js";
import { indirectMarketEffectsSchema, type IndirectMarketEffects } from "./indirect-market-effects.js";
import {
  newsTradingValueInternalSchema,
  newsTradingValueSchema,
  type NewsTradingValue,
} from "./news-trading-value.js";
import { tickerAnalysisSchema, type TickerAnalysis } from "./ticker-analysis.js";

export type AiTradingInsights = {
  tickerAnalysis?: TickerAnalysis[];
  newsTradingValue?: NewsTradingValue;
  indirectMarketEffects?: IndirectMarketEffects;
  alternativePerspectives?: AlternativePerspectives;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const aiTradingInsightsProperties: s.Shape<AiTradingInsights> = {
  tickerAnalysis: s.optional(s.array(s.lazy(() => tickerAnalysisSchema))),
  newsTradingValue: s.optional(s.lazy(() => newsTradingValueInternalSchema)),
  indirectMarketEffects: s.optional(s.lazy(() => indirectMarketEffectsSchema)),
  alternativePerspectives: s.optional(s.lazy(() => alternativePerspectivesSchema)),
  _keysMap: {
    tickerAnalysis: "ticker_analysis",
    newsTradingValue: "news_trading_value",
    indirectMarketEffects: "indirect_market_effects",
    alternativePerspectives: "alternative_perspectives",
  },
};

export const aiTradingInsightsInternalSchema: Schema<AiTradingInsights> = s.object<AiTradingInsights>(
  aiTradingInsightsProperties,
  { additionalProperties: s.json() },
);

export const aiTradingInsightsSchema: Schema<AiTradingInsights> = s.lazySchema(() =>
  s.object<AiTradingInsights>(
    {
      ...aiTradingInsightsProperties,
      newsTradingValue: s.optional(s.lazy(() => newsTradingValueSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
