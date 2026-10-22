import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The ID of the definition for this service. */
export const GiftCardServiceProvider2 = {
  MockGiftCard: "mock-gift-card",
  QwikcilverGiftCard: "qwikcilver-gift-card",
  ValuelinkGiftCard: "valuelink-gift-card",
} as const;
export type GiftCardServiceProvider2 =
  | (typeof GiftCardServiceProvider2)[keyof typeof GiftCardServiceProvider2]
  | (string & {});

export const giftCardServiceProvider2Schema: EnumSchema<GiftCardServiceProvider2> =
  s.enumOf<GiftCardServiceProvider2>(GiftCardServiceProvider2);
