import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Event = {
  LotCreated: "lot.created",
  LotUpdated: "lot.updated",
  LotSold: "lot.sold",
  LotNotSold: "lot.not_sold",
  LotRemoved: "lot.removed",
  AuctionRescheduled: "auction.rescheduled",
  AuctionEnded: "auction.ended",
  BidChanged: "bid.changed",
  BuyNowChanged: "buy_now.changed",
  ReserveChanged: "reserve.changed",
} as const;
export type Event = (typeof Event)[keyof typeof Event] | (string & {});

export const eventSchema: EnumSchema<Event> = s.enumOf<Event>(Event);
