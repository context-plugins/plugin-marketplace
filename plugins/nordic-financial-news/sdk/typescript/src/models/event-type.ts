import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The kind of calendar event */
export const EventType = {
  EarningsReport: "earnings_report",
  EarningsCall: "earnings_call",
  Agm: "agm",
  Egm: "egm",
  Dividend: "dividend",
  CapitalMarketsDay: "capital_markets_day",
  TradingUpdate: "trading_update",
  ConferencePresentation: "conference_presentation",
  MaAnnouncement: "ma_announcement",
  MaOfferDeadline: "ma_offer_deadline",
  MaCompletion: "ma_completion",
  Listing: "listing",
  Delisting: "delisting",
} as const;
export type EventType = (typeof EventType)[keyof typeof EventType] | (string & {});

export const eventTypeSchema: EnumSchema<EventType> = s.enumOf<EventType>(EventType);
