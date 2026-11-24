import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  ownershipFormAlphAiRestSymbolsApiSchema,
  type OwnershipFormAlphAiRestSymbolsApi,
} from "./ownership-form-alph-ai-rest-symbols-api.js";
import {
  sideAlphAiRestSymbolsApiSchema,
  type SideAlphAiRestSymbolsApi,
} from "./side-alph-ai-rest-symbols-api.js";

/**
 * One Form 4 economic event, same folding as the feed's `InsiderEvent` (a filing's whole tranche
 * group: `shares` and `total_value_usd` are group sums, `avg_price_usd` is value-weighted over
 * priced tranches, money and share fields are decimal STRINGS). Differences from the feed block:
 * `side` here is only `buy` or `sell` (D counts as sell, see the endpoint description), and each
 * event adds its stake impact, tranche count and the link to our enriched article.
 */
export type InsiderTradeEvent = {
  /** Value-flow label; `transaction_code` carries the raw code. */
  side: SideAlphAiRestSymbolsApi;
  /** Raw SEC Form 4 transaction code (`P`, `S`, `D`). */
  transactionCode: string;
  /** Direct or indirect holding pool. */
  ownershipForm: OwnershipFormAlphAiRestSymbolsApi;
  /** Security class from the filing; empty when unreported. */
  securityTitle?: string;
  /** Total shares across the event's tranches (decimal string). */
  shares: string;
  /**
   * Value-weighted average price per share over priced tranches. `null` when the filing prices no
   * tranche.
   */
  avgPriceUsd?: string | null;
  /**
   * Total USD value across priced tranches (a lower bound when some tranches are unpriced). `null`
   * when no tranche is priced.
   */
  totalValueUsd?: string | null;
  /** Fills folded into this event (a 10b5-1 ladder files many). */
  trancheCount: number;
  /**
   * Percent of the pre-event position this event moved, as a decimal string; sells are negative
   * ("-26.0" = sold 26% of the stake). `null` when the pre-event position cannot be reconstructed.
   */
  stakeChangePct?: string | null;
  /** True when any tranche executed under a pre-arranged 10b5-1 plan. */
  is10B51: boolean;
  /**
   * The filing missed the SEC's two-business-day deadline, computed the same way as the feed's
   * `InsiderEvent.late_filing`.
   */
  lateFiling: boolean;
  insiderName: string;
  insiderTitle: string;
  isOfficer: boolean;
  isDirector: boolean;
  isTenPercentOwner: boolean;
  /** Date of the group's last fill (a ladder can span days). */
  transactionDate: string;
  /** When EDGAR accepted the filing (UTC). */
  filedAt: Date;
  /** Uid of the enriched news row fronting this event; matches `original.uid` in the feeds. */
  newsUid: string;
  newsTitle: string;
  /** Publish time of the fronting news row. */
  newsPublished: Date;
  /**
   * Whether the alphai.io article page for `news_uid` exists. Events ingested by the historical
   * backfill have no enriched article; render those without a link.
   */
  hasArticle: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insiderTradeEventSchema: Schema<InsiderTradeEvent> = s.object<InsiderTradeEvent>(
  {
    side: sideAlphAiRestSymbolsApiSchema,
    transactionCode: s.string(),
    ownershipForm: ownershipFormAlphAiRestSymbolsApiSchema,
    securityTitle: s.optional(s.string()),
    shares: s.string(),
    avgPriceUsd: s.optionalNullable(s.string()),
    totalValueUsd: s.optionalNullable(s.string()),
    trancheCount: s.int(),
    stakeChangePct: s.optionalNullable(s.string()),
    is10B51: s.boolean(),
    lateFiling: s.boolean(),
    insiderName: s.string(),
    insiderTitle: s.string(),
    isOfficer: s.boolean(),
    isDirector: s.boolean(),
    isTenPercentOwner: s.boolean(),
    transactionDate: s.dateOnly(),
    filedAt: s.dateTime(),
    newsUid: s.string(),
    newsTitle: s.string(),
    newsPublished: s.dateTime(),
    hasArticle: s.boolean(),
    _keysMap: {
      transactionCode: "transaction_code",
      ownershipForm: "ownership_form",
      securityTitle: "security_title",
      avgPriceUsd: "avg_price_usd",
      totalValueUsd: "total_value_usd",
      trancheCount: "tranche_count",
      stakeChangePct: "stake_change_pct",
      is10B51: "is_10b5_1",
      lateFiling: "late_filing",
      insiderName: "insider_name",
      insiderTitle: "insider_title",
      isOfficer: "is_officer",
      isDirector: "is_director",
      isTenPercentOwner: "is_ten_percent_owner",
      transactionDate: "transaction_date",
      filedAt: "filed_at",
      newsUid: "news_uid",
      newsTitle: "news_title",
      newsPublished: "news_published",
      hasArticle: "has_article",
    },
  },
  { additionalProperties: s.json() },
);
