import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Webhook subscription event type. */
export const Event = {
  ShopTest: "shop.test",
  ShopIncomingMessage: "shop.incoming_message",
  ShopSubscriberOptIn: "shop.subscriber.opt_in",
  ShopSubscriberOptOut: "shop.subscriber.opt_out",
  ShopShopEmailCollected: "shop.shop.email_collected",
} as const;
export type Event = (typeof Event)[keyof typeof Event] | (string & {});

export const eventSchema: EnumSchema<Event> = s.enumOf<Event>(Event);
