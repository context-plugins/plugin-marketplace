import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount2Schema, type Amount2 } from "./unions/amount2.js";
import {
  buyerExternalIdentifier10Schema,
  type BuyerExternalIdentifier10,
} from "./unions/buyer-external-identifier10.js";
import { buyerId10Schema, type BuyerId10 } from "./unions/buyer-id10.js";
import { currency2Schema, type Currency2 } from "./unions/currency2.js";
import { externalIdentifier15Schema, type ExternalIdentifier15 } from "./unions/external-identifier15.js";
import { pinSchema, type Pin } from "./unions/pin.js";

/** The details used to activate a physical gift card. */
export type GiftCardActivationCreate = {
  /** The 16-19 digit number for the gift card. */
  number: string;
  /** The PIN for this gift card. */
  pin?: Pin;
  /**
   * The amount to load onto the gift card, in the smallest denomination for the currency. Required
   * if `currency` is provided.
   */
  amount?: Amount2;
  /** The ISO-4217 currency code for the `amount`. Required if `amount` is provided. */
  currency?: Currency2;
  /** An optional external identifier for this activation. */
  externalIdentifier?: ExternalIdentifier15;
  /**
   * Whether to store the activated gift card in the vault. When `true`, a `pin` is required.
   *
   * @default false
   */
  store?: boolean;
  /**
   * The ID of the buyer to associate this gift card to. Only allowed when `store` is `true`. If
   * this field is provided then the `buyer_external_identifier` field needs to be unset.
   */
  buyerId?: BuyerId10;
  /**
   * The `external_identifier` of the buyer to associate this gift card to. Only allowed when
   * `store` is `true`. If this field is provided then the `buyer_id` field needs to be unset.
   */
  buyerExternalIdentifier?: BuyerExternalIdentifier10;
};

export const giftCardActivationCreateSchema: Schema<GiftCardActivationCreate> =
  s.object<GiftCardActivationCreate>({
    number: s.string(),
    pin: s.optional(s.lazy(() => pinSchema)),
    amount: s.optional(s.lazy(() => amount2Schema)),
    currency: s.optional(s.lazy(() => currency2Schema)),
    externalIdentifier: s.optional(s.lazy(() => externalIdentifier15Schema)),
    store: s.defaulted(s.boolean(), false),
    buyerId: s.optional(s.lazy(() => buyerId10Schema)),
    buyerExternalIdentifier: s.optional(s.lazy(() => buyerExternalIdentifier10Schema)),
    _keysMap: {
      externalIdentifier: "external_identifier",
      buyerId: "buyer_id",
      buyerExternalIdentifier: "buyer_external_identifier",
    },
  });
