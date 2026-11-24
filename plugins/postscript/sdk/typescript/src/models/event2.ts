import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Webhook subscription event type. */
export const Event2 = {
  ShopTest: "shop.test",
  ShopIncomingMessage: "shop.incoming_message",
  ShopSubscriberOptIn: "shop.subscriber.opt_in",
  ShopSubscriberOptOut: "shop.subscriber.opt_out",
  ShopEmailCollected: "shop.email_collected",
} as const;
export type Event2 = (typeof Event2)[keyof typeof Event2] | (string & {});

export const event2Schema: EnumSchema<Event2> = s.enumOf<Event2>(Event2);
