import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EventType = {
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
export type EventType = (typeof EventType)[keyof typeof EventType] | (string & {});

export const eventTypeSchema: EnumSchema<EventType> = s.enumOf<EventType>(EventType);
