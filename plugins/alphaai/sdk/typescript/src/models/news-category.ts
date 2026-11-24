import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * `market_movers` is for articles whose subject IS a notable price move ("AMD up 5% today");
 * `sector_analysis` is genuine sector-level analysis; `insider` covers SEC Form 4 insider
 * transactions only. SEC 8-K filings categorize by their primary item: an earnings release (Item
 * 2.02) is `earnings`, a completed acquisition or disposition (Item 2.01) is
 * `mergers_acquisitions`, and the remaining events (material agreements, debt, executive changes,
 * annual-meeting results, and since 2026-09-17 securities offerings, Regulation FD disclosures and
 * other events under Items 7.01/8.01) are `corporate_actions`. A foreign private issuer's SEC 6-K
 * appears only when it is an earnings release (`source` "SEC EDGAR 6-K") and is always `earnings`.
 */
export const NewsCategory = {
  Earnings: "earnings",
  MergersAcquisitions: "mergers_acquisitions",
  Regulation: "regulation",
  MacroEconomy: "macro_economy",
  SectorAnalysis: "sector_analysis",
  MarketMovers: "market_movers",
  Technology: "technology",
  Commodities: "commodities",
  Crypto: "crypto",
  Ipo: "ipo",
  Geopolitics: "geopolitics",
  Insider: "insider",
  CorporateActions: "corporate_actions",
  Other: "other",
} as const;
export type NewsCategory = (typeof NewsCategory)[keyof typeof NewsCategory] | (string & {});

export const newsCategorySchema: EnumSchema<NewsCategory> = s.enumOf<NewsCategory>(NewsCategory);
