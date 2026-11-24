import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EventType1 = {
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
export type EventType1 = (typeof EventType1)[keyof typeof EventType1] | (string & {});

export const eventType1Schema: EnumSchema<EventType1> = s.enumOf<EventType1>(EventType1);
