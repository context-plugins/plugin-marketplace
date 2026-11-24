import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Symbol = {
  symbol: string;
  name: string;
  /** `Stock`, `ETF`, or `Crypto`. */
  assetType?: string;
  /**
   * TradingView exchange prefix. US: NYSE / NASDAQ / AMEX / OTC / CBOE (from SEC's exchange
   * mapping). Foreign listings carry their venue prefix (LSE, XETR, EURONEXT, TSE, HKEX, KRX, …);
   * crypto carries the `CRYPTO` sentinel. Empty string when unknown.
   */
  exchange?: string;
  sector?: string;
  industry?: string;
  description?: string;
  website?: string | null;
  /**
   * Lowercase names the issuer is known by, when they differ from `name` (`["spacex"]` on SPCX,
   * registered as SPACE EXPLORATION TECHNOLOGIES CORP). Use them to match a name a user typed
   * against a ticker. Usually empty: most issuers are already reachable by their registered name.
   * List responses only.
   */
  brandAliases?: string[];
  /**
   * ISO alpha-2 country of domicile. `US` for SEC-listed symbols, the listing venue's country for
   * foreign listings. Empty for crypto — a coin has no domicile.
   */
  country?: string;
  /**
   * Trading currency. `USD` for SEC-listed symbols and crypto pairs, the local currency for foreign
   * listings.
   */
  currency?: string;
  /**
   * The next earnings date the company itself has confirmed, in America/New_York. Detail responses
   * only.
   *
   * **Never an estimate.** `null` means AlphAI holds no confirmed date — NOT that the company does
   * not report. Confirmed dates typically surface about five weeks ahead, so `null` further out is
   * the normal state, and coverage at any moment is partial. We deliberately do not fill the gap
   * with a projection from the reporting cadence: a date nothing corroborates is indistinguishable
   * downstream from one that does.
   *
   * Bridges share classes: a request for one class answers with the issuer's confirmed date
   * whichever class it was filed under.
   */
  nextReportDate?: string | null;
  /**
   * Whether this symbol has SEC Form 4 insider data — true for US SEC-listed equities, false for
   * exchange-traded funds (`asset_type` `ETF`), crypto and foreign listings. When false,
   * `/insider-summary/` and `/insider-trades/` return empty rather than failing. Detail responses
   * only.
   */
  supportsInsider?: boolean;
  /**
   * When this symbol owns a bare string an ACTIVE cryptocurrency also answers to (delisted SOL =
   * Emeren Group vs the coin SOL-USD, BTC = Grayscale ETF vs BTC-USD), the coin's ticker. `null`
   * for symbols without an active crypto twin. Detail responses only.
   */
  cryptoCounterpart?: string | null;
  /** Display name of `crypto_counterpart` (empty when it is null). Detail responses only. */
  cryptoCounterpartName?: string;
  /**
   * Per-symbol TradingView symbol override, when the venue-prefix rule built from `exchange` does
   * not produce the right chart symbol. Empty for almost every row. Detail responses only.
   */
  tvSymbol?: string;
  /**
   * Listing status, `active` or `delisted`. Delisted symbols stay resolvable on this endpoint so
   * their news history remains reachable.
   */
  status?: string;
  /**
   * When the symbol was marked delisted. Null for active symbols and for symbols delisted before
   * July 2026.
   */
  delistedAt?: Date | null;
  /**
   * Set on a delisted symbol when the company continues under a new ticker (for example SATS became
   * ECHO). Empty otherwise.
   */
  renamedTo?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const symbolProperties: s.Shape<Symbol> = {
  symbol: s.string(),
  name: s.string(),
  assetType: s.optional(s.string()),
  exchange: s.optional(s.string()),
  sector: s.optional(s.string()),
  industry: s.optional(s.string()),
  description: s.optional(s.string()),
  website: s.optionalNullable(s.string()),
  brandAliases: s.optional(s.array(s.string())),
  country: s.optional(s.string()),
  currency: s.optional(s.string()),
  nextReportDate: s.optionalNullable(s.dateOnly()),
  supportsInsider: s.optional(s.boolean()),
  cryptoCounterpart: s.optionalNullable(s.string()),
  cryptoCounterpartName: s.optional(s.string()),
  tvSymbol: s.optional(s.string()),
  status: s.optional(s.string()),
  delistedAt: s.optionalNullable(s.dateTime()),
  renamedTo: s.optional(s.string()),
  _keysMap: {
    assetType: "asset_type",
    brandAliases: "brand_aliases",
    nextReportDate: "next_report_date",
    supportsInsider: "supports_insider",
    cryptoCounterpart: "crypto_counterpart",
    cryptoCounterpartName: "crypto_counterpart_name",
    tvSymbol: "tv_symbol",
    delistedAt: "delisted_at",
    renamedTo: "renamed_to",
  },
};

export const symbolInternalSchema: Schema<Symbol> = s.object<Symbol>(symbolProperties, {
  additionalProperties: s.json(),
});

export const symbolSchema: Schema<Symbol> = s.lazySchema(() =>
  s.object<Symbol>(
    {
      ...symbolProperties,
      website: s.optionalNullable(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
