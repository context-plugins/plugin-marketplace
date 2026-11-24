import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SourceType = {
  NewsPublication: "news_publication",
  WireService: "wire_service",
  PressRelease: "press_release",
  Government: "government",
  TradePublication: "trade_publication",
  Blog: "blog",
  StockExchange: "stock_exchange",
  Research: "research",
} as const;
export type SourceType = (typeof SourceType)[keyof typeof SourceType] | (string & {});

export const sourceTypeSchema: EnumSchema<SourceType> = s.enumOf<SourceType>(SourceType);
