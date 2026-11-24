import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Event1 = {
  ShopTest: "shop.test",
  ShopIncomingMessage: "shop.incoming_message",
  ShopSubscriberOptIn: "shop.subscriber.opt_in",
  ShopSubscriberOptOut: "shop.subscriber.opt_out",
  ShopEmailCollected: "shop.email_collected",
} as const;
export type Event1 = (typeof Event1)[keyof typeof Event1] | (string & {});

export const event1Schema: EnumSchema<Event1> = s.enumOf<Event1>(Event1);
