import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of article content */
export const ContentType = {
  News: "news",
  Analysis: "analysis",
  PressRelease: "press_release",
  MarketCommentary: "market_commentary",
  MarketNews: "market_news",
  TradingHalt: "trading_halt",
  TradingEvent: "trading_event",
  Other: "other",
} as const;
export type ContentType = (typeof ContentType)[keyof typeof ContentType] | (string & {});

export const contentTypeSchema: EnumSchema<ContentType> = s.enumOf<ContentType>(ContentType);
