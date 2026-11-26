import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { clusterBuyerSchema, type ClusterBuyer } from "./cluster-buyer.js";
import { clusterFilingInternalSchema, clusterFilingSchema, type ClusterFiling } from "./cluster-filing.js";
import { patternSchema, type Pattern } from "./pattern.js";

/**
 * One issuer's run of Form 4 purchases and its verdict. Money fields are decimal STRINGS. `buyers`
 * counts independent buyers (the cluster); `buyers_total` everyone who bought, including plan,
 * unpriced and duplicate reporters.
 */
export type InsiderCluster = {
  ticker: string;
  name: string;
  /** SEC Central Index Key of the issuer. */
  cik: number;
  /** First purchase date of the episode. */
  windowStart: string;
  /** Last purchase date of the episode. */
  windowEnd: string;
  /** When the episode's latest filing reached EDGAR — the clock `days` is measured on. */
  knownAt: Date;
  /** Independent buyers. */
  buyers: number;
  /** Every distinct reporting owner after duplicate merging. */
  buyersTotal: number;
  /** Independent buyers who are an officer or director. */
  officerDirectorBuyers: number;
  /** Independent buyers flagged as 10% owners. */
  tenPercentOwnerBuyers: number;
  /** Purchase tranches counted (a transaction reported twice is counted once). */
  fills: number;
  /** Distinct Form 4 filings. */
  filings: number;
  /**
   * Sum of the counted tranches' values (decimal string); `null` when no tranche carries a price.
   */
  totalUsd: string | null;
  /**
   * `true` when at least one counted tranche has no price, so `total_usd` understates the episode.
   */
  valuePartial: boolean;
  distinctDates: number;
  /** Distinct prices to the cent across priced tranches. */
  distinctPrices: number;
  pattern: Pattern;
  /**
   * Machine-readable notes behind the verdict, e.g. `mass_uniform_date_price`,
   * `same_price_across_dates`, `one_price_multi_date`, `plan_like_buyers`, `off_market_buyers` (a
   * buyer whose filing says placement / offering / private), `unpriced_buyers`,
   * `duplicate_filings`, `no_officer_or_director`.
   */
  patternReasons: string[];
  buyersDetail: ClusterBuyer[];
  filingsDetail: ClusterFiling[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const insiderClusterProperties: s.Shape<InsiderCluster> = {
  ticker: s.string(),
  name: s.string(),
  cik: s.int(),
  windowStart: s.dateOnly(),
  windowEnd: s.dateOnly(),
  knownAt: s.dateTime(),
  buyers: s.int(),
  buyersTotal: s.int(),
  officerDirectorBuyers: s.int(),
  tenPercentOwnerBuyers: s.int(),
  fills: s.int(),
  filings: s.int(),
  totalUsd: s.nullable(s.string()),
  valuePartial: s.boolean(),
  distinctDates: s.int(),
  distinctPrices: s.int(),
  pattern: patternSchema,
  patternReasons: s.array(s.string()),
  buyersDetail: s.array(s.lazy(() => clusterBuyerSchema)),
  filingsDetail: s.array(s.lazy(() => clusterFilingInternalSchema)),
  _keysMap: {
    windowStart: "window_start",
    windowEnd: "window_end",
    knownAt: "known_at",
    buyersTotal: "buyers_total",
    officerDirectorBuyers: "officer_director_buyers",
    tenPercentOwnerBuyers: "ten_percent_owner_buyers",
    totalUsd: "total_usd",
    valuePartial: "value_partial",
    distinctDates: "distinct_dates",
    distinctPrices: "distinct_prices",
    patternReasons: "pattern_reasons",
    buyersDetail: "buyers_detail",
    filingsDetail: "filings_detail",
  },
};

export const insiderClusterInternalSchema: Schema<InsiderCluster> = s.object<InsiderCluster>(
  insiderClusterProperties,
  { additionalProperties: s.json() },
);

export const insiderClusterSchema: Schema<InsiderCluster> = s.lazySchema(() =>
  s.object<InsiderCluster>(
    {
      ...insiderClusterProperties,
      filingsDetail: s.array(s.lazy(() => clusterFilingSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
