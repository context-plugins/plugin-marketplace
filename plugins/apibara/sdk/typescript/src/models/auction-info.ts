import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { outcomeStatusSchema, type OutcomeStatus } from "./outcome-status.js";

export type AuctionInfo = {
  state?: string;
  auctionAt?: Date | null;
  lotStatus?: string;
  lotSubStatus?: string;
  /** Last known sale-outcome day. Placeholder dates before year 2000 are normalized to null. */
  lastSoldDay?: string | null;
  /**
   * Exact source-backed sale/outcome observation timestamp when available. Null when only a
   * day-level sale date is known.
   */
  lastSoldAt?: Date | null;
  lastSoldStatus?: string | null;
  /** Explicit normalized outcome only; elapsed time alone is not treated as a sale. */
  outcomeStatus?: OutcomeStatus | null;
  /**
   * Best known completed-auction/outcome timestamp. Prefers source-backed sale/outcome evidence;
   * otherwise may use a past scheduled auction timestamp. Never uses a future schedule as an ended
   * timestamp.
   */
  auctionEndedAt?: Date | null;
  /**
   * Timestamp when the current outcome was observed/persisted. Prefers source-backed sale evidence;
   * falls back to the persisted vehicle update timestamp when exact source timing is unavailable.
   */
  outcomeObservedAt?: Date | null;
  /** Source/parser evidence that the lot was removed from active inventory. */
  lotRemoved?: boolean;
  soldBuyNow?: boolean;
  soldTimed?: boolean;
  /**
   * True when the imported active lot has no assigned auction date. auction_at and ad are null.
   * Explicit auction-date filters exclude these records.
   */
  auctionDatePending?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const auctionInfoSchema: Schema<AuctionInfo> = s.object<AuctionInfo>(
  {
    state: s.optional(s.string()),
    auctionAt: s.optionalNullable(s.dateTime()),
    lotStatus: s.optional(s.string()),
    lotSubStatus: s.optional(s.string()),
    lastSoldDay: s.optionalNullable(s.dateOnly()),
    lastSoldAt: s.optionalNullable(s.dateTime()),
    lastSoldStatus: s.optionalNullable(s.string()),
    outcomeStatus: s.optionalNullable(s.lazy(() => outcomeStatusSchema)),
    auctionEndedAt: s.optionalNullable(s.dateTime()),
    outcomeObservedAt: s.optionalNullable(s.dateTime()),
    lotRemoved: s.optional(s.boolean()),
    soldBuyNow: s.optional(s.boolean()),
    soldTimed: s.optional(s.boolean()),
    auctionDatePending: s.optional(s.boolean()),
    _keysMap: {
      auctionAt: "auction_at",
      lotStatus: "lot_status",
      lotSubStatus: "lot_sub_status",
      lastSoldDay: "last_sold_day",
      lastSoldAt: "last_sold_at",
      lastSoldStatus: "last_sold_status",
      outcomeStatus: "outcome_status",
      auctionEndedAt: "auction_ended_at",
      outcomeObservedAt: "outcome_observed_at",
      lotRemoved: "lot_removed",
      soldBuyNow: "sold_buy_now",
      soldTimed: "sold_timed",
      auctionDatePending: "auction_date_pending",
    },
  },
  { additionalProperties: s.json() },
);
