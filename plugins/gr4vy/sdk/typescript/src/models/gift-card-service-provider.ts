import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GiftCardServiceProvider = {
  MockGiftCard: "mock-gift-card",
  QwikcilverGiftCard: "qwikcilver-gift-card",
  ValuelinkGiftCard: "valuelink-gift-card",
} as const;
export type GiftCardServiceProvider =
  | (typeof GiftCardServiceProvider)[keyof typeof GiftCardServiceProvider]
  | (string & {});

export const giftCardServiceProviderSchema: EnumSchema<GiftCardServiceProvider> =
  s.enumOf<GiftCardServiceProvider>(GiftCardServiceProvider);
