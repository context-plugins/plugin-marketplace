import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  aiTradingInsightsInternalSchema,
  aiTradingInsightsSchema,
  type AiTradingInsights,
} from "./ai-trading-insights.js";
import { newsCategorySchema, type NewsCategory } from "./news-category.js";
import { newsContextEnhancementSchema, type NewsContextEnhancement } from "./news-context-enhancement.js";

export type EnrichedArticle = {
  /**
   * `market_movers` is for articles whose subject IS a notable price move ("AMD up 5% today");
   * `sector_analysis` is genuine sector-level analysis; `insider` covers SEC Form 4 insider
   * transactions only. SEC 8-K filings categorize by their primary item: an earnings release (Item
   * 2.02) is `earnings`, a completed acquisition or disposition (Item 2.01) is
   * `mergers_acquisitions`, and the remaining events (material agreements, debt, executive changes,
   * annual-meeting results, and since 2026-09-17 securities offerings, Regulation FD disclosures
   * and other events under Items 7.01/8.01) are `corporate_actions`. A foreign private issuer's SEC
   * 6-K appears only when it is an earnings release (`source` "SEC EDGAR 6-K") and is always
   * `earnings`.
   */
  category?: NewsCategory;
  /**
   * Validated tickers the article mentions — only symbols present in `/api/symbols/` survive
   * enrichment-time verification against the article text. Mirrors
   * `ai_trading_insights.ticker_analysis[].ticker`.
   */
  tickers?: string[];
  /**
   * How much trading value the article itself carries (rates the article, not the company;
   * deterministic — same article, same score): 1–2 no trading relevance · 3–4 derivative content
   * about already-known events · 5–6 macro/sector datapoints, minor-but-real company news · 7–8
   * real company news with a fresh catalyst · 9–10 primary, material, newly disclosed. SEC Form 4
   * rows are scored from the transaction itself (size, buy vs. sell, 10b5-1 plan or not) rather
   * than by the model; a sale tops out at 6.
   */
  relevanceScore?: number;
  aiTradingInsights?: AiTradingInsights;
  newsContextEnhancement?: NewsContextEnhancement;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const enrichedArticleProperties: s.Shape<EnrichedArticle> = {
  category: s.optional(s.lazy(() => newsCategorySchema)),
  tickers: s.optional(s.array(s.string())),
  relevanceScore: s.optional(s.int()),
  aiTradingInsights: s.optional(s.lazy(() => aiTradingInsightsInternalSchema)),
  newsContextEnhancement: s.optional(s.lazy(() => newsContextEnhancementSchema)),
  _keysMap: {
    relevanceScore: "relevance_score",
    aiTradingInsights: "ai_trading_insights",
    newsContextEnhancement: "news_context_enhancement",
  },
};

export const enrichedArticleInternalSchema: Schema<EnrichedArticle> = s.object<EnrichedArticle>(
  enrichedArticleProperties,
  { additionalProperties: s.json() },
);

export const enrichedArticleSchema: Schema<EnrichedArticle> = s.lazySchema(() =>
  s.object<EnrichedArticle>(
    {
      ...enrichedArticleProperties,
      relevanceScore: s.optional(s.int().check(s.gte(1), s.lte(10))),
      aiTradingInsights: s.optional(s.lazy(() => aiTradingInsightsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
