import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  buyerExternalIdentifier4Schema,
  type BuyerExternalIdentifier4,
} from "./unions/buyer-external-identifier4.js";
import { buyerIdSchema, type BuyerId } from "./unions/buyer-id.js";
import { cardType1ModelSchema, type CardType1Model } from "./unions/card-type1-model.js";
import { externalIdentifier8Schema, type ExternalIdentifier8 } from "./unions/external-identifier8.js";
import { messageExpirationSchema, type MessageExpiration } from "./unions/message-expiration.js";
import { redirectUrlSchema, type RedirectUrl } from "./unions/redirect-url.js";

/** Create a Google Pay payment with an FPAN. */
export type GooglePayFpanPaymentMethodCreate = {
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
  /** Aways `googlepay_pan_only`. @default "googlepay_pan_only" */
  method?: "googlepay_pan_only";
  /** The URL to redirect a user back to after the complete 3DS in browser. */
  redirectUrl?: RedirectUrl;
  /**
   * The 3 or 4 digit security code often found on the card. This often referred to as the CVV or
   * CVD.
   */
  securityCode?: string | null;
  /** Expiry of the Google Pay token the PAN was decrypted from, as milliseconds since the epoch. */
  messageExpiration?: MessageExpiration;
};

export const googlePayFpanPaymentMethodCreateSchema: Schema<GooglePayFpanPaymentMethodCreate> =
  s.object<GooglePayFpanPaymentMethodCreate>({
    expirationDate: s.string(),
    number: s.string(),
    buyerExternalIdentifier: s.optional(s.lazy(() => buyerExternalIdentifier4Schema)),
    buyerId: s.optional(s.lazy(() => buyerIdSchema)),
    externalIdentifier: s.optional(s.lazy(() => externalIdentifier8Schema)),
    cardType: s.optional(s.lazy(() => cardType1ModelSchema)),
    method: s.defaulted(s.literal("googlepay_pan_only"), "googlepay_pan_only"),
    redirectUrl: s.optional(s.lazy(() => redirectUrlSchema)),
    securityCode: s.optionalNullable(s.string()),
    messageExpiration: s.optional(s.lazy(() => messageExpirationSchema)),
    _keysMap: {
      expirationDate: "expiration_date",
      buyerExternalIdentifier: "buyer_external_identifier",
      buyerId: "buyer_id",
      externalIdentifier: "external_identifier",
      cardType: "card_type",
      redirectUrl: "redirect_url",
      securityCode: "security_code",
      messageExpiration: "message_expiration",
    },
  });
