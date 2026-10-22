import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  buyerExternalIdentifier1Schema,
  type BuyerExternalIdentifier1,
} from "./unions/buyer-external-identifier1.js";
import { buyerId1Schema, type BuyerId1 } from "./unions/buyer-id1.js";
import { cardScheme1Schema, type CardScheme1 } from "./unions/card-scheme1.js";
import { cardSuffixSchema, type CardSuffix } from "./unions/card-suffix.js";
import { cardTypeSchema, type CardType } from "./unions/card-type.js";
import { cardholderNameSchema, type CardholderName } from "./unions/cardholder-name.js";
import { checkoutTokenSchema, type CheckoutToken } from "./unions/checkout-token.js";
import { redirectUrlSchema, type RedirectUrl } from "./unions/redirect-url.js";

/** Create a Paze transaction with a device token. */
export type PazePaymentMethodCreate = {
  /** The external identifier of the buyer to create a payment for. */
  buyerExternalIdentifier?: BuyerExternalIdentifier1;
  /** The ID of the buyer to retrieve billing details for. */
  buyerId?: BuyerId1;
  /** The card holder name associated to the original card for the token. */
  cardholderName?: CardholderName;
  /** The URL to redirect a user back to after the complete 3DS in browser. */
  redirectUrl?: RedirectUrl;
  /** The last 4 digits of the original card used to generate the token. */
  cardSuffix?: CardSuffix;
  /** The original card scheme for which the token was generated. */
  cardScheme?: CardScheme1;
  /** The payment scheme of the card. */
  cardType?: CardType;
  /** Always `paze` @default "paze" */
  method?: "paze";
  /** The opaque token as received from the Paze complete response. */
  token: string;
  /** The signed checkout JWS as received from the Paze checkout response. */
  checkoutToken?: CheckoutToken;
};

export const pazePaymentMethodCreateSchema: Schema<PazePaymentMethodCreate> =
  s.object<PazePaymentMethodCreate>({
    buyerExternalIdentifier: s.optional(s.lazy(() => buyerExternalIdentifier1Schema)),
    buyerId: s.optional(s.lazy(() => buyerId1Schema)),
    cardholderName: s.optional(s.lazy(() => cardholderNameSchema)),
    redirectUrl: s.optional(s.lazy(() => redirectUrlSchema)),
    cardSuffix: s.optional(s.lazy(() => cardSuffixSchema)),
    cardScheme: s.optional(s.lazy(() => cardScheme1Schema)),
    cardType: s.optional(s.lazy(() => cardTypeSchema)),
    method: s.defaulted(s.literal("paze"), "paze"),
    token: s.string(),
    checkoutToken: s.optional(s.lazy(() => checkoutTokenSchema)),
    _keysMap: {
      buyerExternalIdentifier: "buyer_external_identifier",
      buyerId: "buyer_id",
      cardholderName: "cardholder_name",
      redirectUrl: "redirect_url",
      cardSuffix: "card_suffix",
      cardScheme: "card_scheme",
      cardType: "card_type",
      checkoutToken: "checkout_token",
    },
  });
