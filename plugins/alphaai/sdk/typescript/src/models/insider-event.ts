import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sideSchema, type Side } from "./side.js";

/**
 * Structured SEC Form 4 event: the aggregate of the news row's whole transaction group (one row
 * fronts a filing's non-derivative trades of one type and holding form, so a 10b5-1 ladder is ONE
 * event). `shares` and `total_value_usd` are group sums; `avg_price_usd` is the value-weighted
 * average over priced tranches. Money and share fields are decimal STRINGS to preserve precision.
 */
export type InsiderEvent = {
  /**
   * Signal label from the transaction code: `buy` (P, open-market purchase), `sell` (S, open-market
   * sale), `other` for everything else — including D (sale to the issuer: a buyback/redemption, not
   * an open-market disposition). Use `transaction_code` for your own mapping.
   */
  side: Side;
  /** Raw SEC Form 4 transaction code (`P`, `S`, `D`, …). */
  transactionCode: string;
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
  /**
   * True when any tranche executed under a pre-arranged 10b5-1 plan. Filterable on this endpoint:
   * `?is_10b5_1=false` keeps only discretionary events.
   */
  is10B51: boolean;
  insiderName: string;
  insiderTitle: string;
  isOfficer: boolean;
  isDirector: boolean;
  isTenPercentOwner: boolean;
  /** Date of the group's last fill (a ladder can span days). */
  transactionDate: string;
  /**
   * When EDGAR accepted the filing (UTC). Compare against `transaction_date` for your own lateness
   * rule.
   */
  filedAt: Date;
  /**
   * The filing missed the SEC's two-business-day deadline (Rule 16a-3(g)). Computed on Eastern
   * dates, since EDGAR accepts filings until ~22:00 ET, and with one weekday of slack so a trade in
   * a holiday week is not flagged: true when more than three weekday-days separate
   * `transaction_date` from the filing. About 3% of events carry it; the long tail is catch-up
   * filings covering trades from years earlier.
   */
  lateFiling: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insiderEventSchema: Schema<InsiderEvent> = s.object<InsiderEvent>(
  {
    side: sideSchema,
    transactionCode: s.string(),
    shares: s.string(),
    avgPriceUsd: s.optionalNullable(s.string()),
    totalValueUsd: s.optionalNullable(s.string()),
    is10B51: s.boolean(),
    insiderName: s.string(),
    insiderTitle: s.string(),
    isOfficer: s.boolean(),
    isDirector: s.boolean(),
    isTenPercentOwner: s.boolean(),
    transactionDate: s.dateOnly(),
    filedAt: s.dateTime(),
    lateFiling: s.boolean(),
    _keysMap: {
      transactionCode: "transaction_code",
      avgPriceUsd: "avg_price_usd",
      totalValueUsd: "total_value_usd",
      is10B51: "is_10b5_1",
      insiderName: "insider_name",
      insiderTitle: "insider_title",
      isOfficer: "is_officer",
      isDirector: "is_director",
      isTenPercentOwner: "is_ten_percent_owner",
      transactionDate: "transaction_date",
      filedAt: "filed_at",
      lateFiling: "late_filing",
    },
  },
  { additionalProperties: s.json() },
);
