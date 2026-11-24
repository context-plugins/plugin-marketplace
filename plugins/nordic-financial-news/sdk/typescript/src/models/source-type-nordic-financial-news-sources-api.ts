import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Source type */
export const SourceTypeNordicFinancialNewsSourcesApi = {
  NewsPublication: "news_publication",
  WireService: "wire_service",
  PressRelease: "press_release",
  Government: "government",
  TradePublication: "trade_publication",
  Blog: "blog",
  StockExchange: "stock_exchange",
  Research: "research",
} as const;
export type SourceTypeNordicFinancialNewsSourcesApi =
  | (typeof SourceTypeNordicFinancialNewsSourcesApi)[keyof typeof SourceTypeNordicFinancialNewsSourcesApi]
  | (string & {});

export const sourceTypeNordicFinancialNewsSourcesApiSchema: EnumSchema<SourceTypeNordicFinancialNewsSourcesApi> =
  s.enumOf<SourceTypeNordicFinancialNewsSourcesApi>(SourceTypeNordicFinancialNewsSourcesApi);
