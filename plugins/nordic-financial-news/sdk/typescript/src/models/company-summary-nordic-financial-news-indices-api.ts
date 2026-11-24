import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { alsoListedOnSchema, type AlsoListedOn } from "./also-listed-on.js";
import {
  exchange1NordicFinancialNewsIndicesApiSchema,
  type Exchange1NordicFinancialNewsIndicesApi,
} from "./exchange1-nordic-financial-news-indices-api.js";

export type CompanySummaryNordicFinancialNewsIndicesApi = {
  /** Unique company identifier */
  id: string;
  /** Company name */
  name: string;
  /** URL-friendly company name */
  slug: string;
  /** Primary stock ticker (null if unlisted) */
  ticker?: string | null;
  /**
   * Tickers the company was formerly listed under, from delisted or renamed listings, excluding any
   * that are still a current ticker. Always present; empty when none. The ticker filter resolves
   * former tickers as well as the current one, so a match on an old ticker still returns the
   * company; this field tells you the ticker you searched by is historical.
   */
  formerTickers: string[];
  /** Whether the company is currently active/operating */
  isActive?: boolean;
  /** Primary exchange where the company is listed */
  exchange?: Exchange1NordicFinancialNewsIndicesApi | null;
  /**
   * The company's other active listings, excluding the primary listing above: cross-listings on
   * other exchanges and additional share classes (which may be on the same exchange). Always
   * present; empty when the company is single-listed or unlisted. The row's ticker/exchange fields
   * are the primary listing only. Company detail stock_listings is the authoritative full set.
   */
  alsoListedOn: AlsoListedOn[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companySummaryNordicFinancialNewsIndicesApiSchema: Schema<CompanySummaryNordicFinancialNewsIndicesApi> =
  s.object<CompanySummaryNordicFinancialNewsIndicesApi>(
    {
      id: s.string(),
      name: s.string(),
      slug: s.string(),
      ticker: s.optionalNullable(s.string()),
      formerTickers: s.array(s.string()),
      isActive: s.optional(s.boolean()),
      exchange: s.optionalNullable(s.lazy(() => exchange1NordicFinancialNewsIndicesApiSchema)),
      alsoListedOn: s.array(s.lazy(() => alsoListedOnSchema)),
      _keysMap: {
        formerTickers: "former_tickers",
        isActive: "is_active",
        alsoListedOn: "also_listed_on",
      },
    },
    { additionalProperties: s.json() },
  );
