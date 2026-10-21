import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  buyerExternalIdentifier4Schema,
  type BuyerExternalIdentifier4,
} from "./unions/buyer-external-identifier4.js";
import { buyerIdSchema, type BuyerId } from "./unions/buyer-id.js";
import { cardType1ModelSchema, type CardType1Model } from "./unions/card-type1-model.js";
import { externalIdentifier8Schema, type ExternalIdentifier8 } from "./unions/external-identifier8.js";
import { redirectUrlSchema, type RedirectUrl } from "./unions/redirect-url.js";

/** Create a Click to Pay payment with an FPAN or virtual PAN */
export type ClickToPayFpanPaymentMethodCreate = {
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
  /** Aways `click-to-pay`. @default "click-to-pay" */
  method?: "click-to-pay";
  /** The URL to redirect a user back to after the complete 3DS in browser. */
  redirectUrl?: RedirectUrl;
  /**
   * The 3 or 4 digit security code often found on the card. This often referred to as the CVV or
   * CVD.
   */
  securityCode?: string | null;
};

export const clickToPayFpanPaymentMethodCreateSchema: Schema<ClickToPayFpanPaymentMethodCreate> =
  s.object<ClickToPayFpanPaymentMethodCreate>({
    expirationDate: s.string(),
    number: s.string(),
    buyerExternalIdentifier: s.optional(s.lazy(() => buyerExternalIdentifier4Schema)),
    buyerId: s.optional(s.lazy(() => buyerIdSchema)),
    externalIdentifier: s.optional(s.lazy(() => externalIdentifier8Schema)),
    cardType: s.optional(s.lazy(() => cardType1ModelSchema)),
    method: s.defaulted(s.literal("click-to-pay"), "click-to-pay"),
    redirectUrl: s.optional(s.lazy(() => redirectUrlSchema)),
    securityCode: s.optionalNullable(s.string()),
    _keysMap: {
      expirationDate: "expiration_date",
      buyerExternalIdentifier: "buyer_external_identifier",
      buyerId: "buyer_id",
      externalIdentifier: "external_identifier",
      cardType: "card_type",
      redirectUrl: "redirect_url",
      securityCode: "security_code",
    },
  });
