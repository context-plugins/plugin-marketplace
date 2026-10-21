import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { giftCardService1Schema, type GiftCardService1 } from "./gift-card-service1.js";
import { Type33, type33Schema } from "./type33.js";
import { externalIdentifier16Schema, type ExternalIdentifier16 } from "./unions/external-identifier16.js";

export type GiftCardIssuance = {
  /** Always `gift-card-issuance`. @default Type33.GiftCardIssuance */
  type?: Type33;
  /** The ID for the gift card issuance. */
  id: string;
  /** The ID of the merchant account this gift card issuance belongs to. */
  merchantAccountId: string;
  /** The service this gift card was issued against. */
  giftCardService: GiftCardService1;
  /** The identifier for this issuance as provided by the gift card service. */
  giftCardServicePaymentIssuanceId: string;
  /** The URL for the issued gift card. */
  url: string;
  /** The amount loaded onto the gift card, in the smallest denomination for the currency. */
  amount: number;
  /** The ISO-4217 currency code for the `amount`. */
  currency: string;
  /** The external identifier provided when issuing the gift card. */
  externalIdentifier?: ExternalIdentifier16;
  /** The date and time when this gift card was issued. */
  createdAt: Date;
  /** The date and time when this gift card issuance was last updated. */
  updatedAt: Date;
};

export const giftCardIssuanceSchema: Schema<GiftCardIssuance> = s.object<GiftCardIssuance>({
  type: s.defaulted(type33Schema, Type33.GiftCardIssuance),
  id: s.string(),
  merchantAccountId: s.string(),
  giftCardService: giftCardService1Schema,
  giftCardServicePaymentIssuanceId: s.string(),
  url: s.string(),
  amount: s.int(),
  currency: s.string(),
  externalIdentifier: s.optional(s.lazy(() => externalIdentifier16Schema)),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    merchantAccountId: "merchant_account_id",
    giftCardService: "gift_card_service",
    giftCardServicePaymentIssuanceId: "gift_card_service_payment_issuance_id",
    externalIdentifier: "external_identifier",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
