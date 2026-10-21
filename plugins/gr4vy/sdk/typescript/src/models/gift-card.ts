import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { giftCardService3Schema, type GiftCardService3 } from "./gift-card-service3.js";
import { Type31, type31Schema } from "./type31.js";
import { buyer12Schema, type Buyer12 } from "./unions/buyer12.js";
import { citLastUsedAtSchema, type CitLastUsedAt } from "./unions/cit-last-used-at.js";
import { expirationDateSchema, type ExpirationDate } from "./unions/expiration-date.js";
import { lastUsedAt1Schema, type LastUsedAt1 } from "./unions/last-used-at1.js";

export type GiftCard = {
  /** Always `gift-card`. @default Type31.GiftCard */
  type?: Type31;
  /** The ID for the gift card. */
  id: string;
  /** The ID of the merchant account this buyer belongs to. */
  merchantAccountId: string;
  /** The service this gift card belongs to. */
  giftCardService: GiftCardService3;
  /** The first 6 digits of the full gift card number. */
  bin: string;
  /** The 3 digits after the `bin` of the full gift card number. */
  subBin: string;
  /** The last 4 digits for the gift card. */
  last4: string;
  /**
   * The date and time when this gift card expires. This is a full date/time and may be more
   * accurate than the actual expiry date received by the gift card service.
   */
  expirationDate?: ExpirationDate;
  /** The buyer for which this gift card is stored. */
  buyer?: Buyer12;
  /** The date this gift card record was created at. */
  createdAt: Date;
  /** The date this gift card record was last updated at. */
  updatedAt: Date;
  /** The timestamp when this gift card was last used in a transaction. */
  lastUsedAt?: LastUsedAt1;
  /** The number of times this gift card has been used in transactions. */
  usageCount: number;
  /**
   * The timestamp when this gift card was last used in a transaction for client initiated
   * transactions.
   */
  citLastUsedAt?: CitLastUsedAt;
  /**
   * The number of times this gift card has been used in transactions for client initiated
   * transactions.
   */
  citUsageCount: number;
};

export const giftCardSchema: Schema<GiftCard> = s.object<GiftCard>({
  type: s.defaulted(type31Schema, Type31.GiftCard),
  id: s.string(),
  merchantAccountId: s.string(),
  giftCardService: giftCardService3Schema,
  bin: s.string(),
  subBin: s.string(),
  last4: s.string(),
  expirationDate: s.optional(s.lazy(() => expirationDateSchema)),
  buyer: s.optional(s.lazy(() => buyer12Schema)),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  lastUsedAt: s.optional(s.lazy(() => lastUsedAt1Schema)),
  usageCount: s.int(),
  citLastUsedAt: s.optional(s.lazy(() => citLastUsedAtSchema)),
  citUsageCount: s.int(),
  _keysMap: {
    merchantAccountId: "merchant_account_id",
    giftCardService: "gift_card_service",
    subBin: "sub_bin",
    expirationDate: "expiration_date",
    createdAt: "created_at",
    updatedAt: "updated_at",
    lastUsedAt: "last_used_at",
    usageCount: "usage_count",
    citLastUsedAt: "cit_last_used_at",
    citUsageCount: "cit_usage_count",
  },
});
