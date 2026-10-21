import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Method3, method3Schema } from "./method3.js";
import {
  buyerExternalIdentifier4Schema,
  type BuyerExternalIdentifier4,
} from "./unions/buyer-external-identifier4.js";
import { buyerIdSchema, type BuyerId } from "./unions/buyer-id.js";
import { cardType1ModelSchema, type CardType1Model } from "./unions/card-type1-model.js";
import { externalIdentifier8Schema, type ExternalIdentifier8 } from "./unions/external-identifier8.js";
import { preferredScheme1Schema, type PreferredScheme1 } from "./unions/preferred-scheme1.js";
import { securityCodeSchema, type SecurityCode } from "./unions/security-code.js";

export type CardPaymentMethodCreate = {
  /** The expiration date of the card, formatted `MM/YY`. */
  expirationDate: string;
  /** The 13-19 digit number for this card. */
  number: string;
  /** The external identifier of the buyer to attach the method to. */
  buyerExternalIdentifier?: BuyerExternalIdentifier4;
  /** The ID of the buyer to attach the method to. */
  buyerId?: BuyerId;
  /** The merchant reference for this payment method. */
  externalIdentifier?: ExternalIdentifier8;
  /** The type of the card used */
  cardType?: CardType1Model;
  /** Always `card` @default Method3.Card */
  method?: Method3;
  /**
   * The 3 or 4 digit security code often found on the card. This often referred to as the CVV or
   * CVD.
   */
  securityCode?: SecurityCode;
  /** The preferred card scheme to use when processing a co-badged card. */
  preferredScheme?: PreferredScheme1;
};

export const cardPaymentMethodCreateSchema: Schema<CardPaymentMethodCreate> =
  s.object<CardPaymentMethodCreate>({
    expirationDate: s.string(),
    number: s.string(),
    buyerExternalIdentifier: s.optional(s.lazy(() => buyerExternalIdentifier4Schema)),
    buyerId: s.optional(s.lazy(() => buyerIdSchema)),
    externalIdentifier: s.optional(s.lazy(() => externalIdentifier8Schema)),
    cardType: s.optional(s.lazy(() => cardType1ModelSchema)),
    method: s.defaulted(method3Schema, Method3.Card),
    securityCode: s.optional(s.lazy(() => securityCodeSchema)),
    preferredScheme: s.optional(s.lazy(() => preferredScheme1Schema)),
    _keysMap: {
      expirationDate: "expiration_date",
      buyerExternalIdentifier: "buyer_external_identifier",
      buyerId: "buyer_id",
      externalIdentifier: "external_identifier",
      cardType: "card_type",
      securityCode: "security_code",
      preferredScheme: "preferred_scheme",
    },
  });
