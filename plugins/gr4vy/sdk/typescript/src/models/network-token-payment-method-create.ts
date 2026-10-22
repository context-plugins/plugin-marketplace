import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardScheme41Schema, type CardScheme41 } from "./unions/card-scheme41.js";
import { cardSource1Schema, type CardSource1 } from "./unions/card-source1.js";
import { cardSuffix2Schema, type CardSuffix2 } from "./unions/card-suffix2.js";
import { cardholderNameSchema, type CardholderName } from "./unions/cardholder-name.js";
import { cryptogram1Schema, type Cryptogram1 } from "./unions/cryptogram1.js";
import { eciSchema, type Eci } from "./unions/eci.js";
import { redirectUrlSchema, type RedirectUrl } from "./unions/redirect-url.js";

export type NetworkTokenPaymentMethodCreate = {
  /** Always `network-token`. @default "network-token" */
  method?: "network-token";
  /** The scheme token. */
  token: string;
  /** The expiration date of the token. */
  expirationDate: string;
  /** The payment cryptogram for the network token. */
  cryptogram?: Cryptogram1;
  /** The URL to redirect a user back to after the complete 3DS in browser. */
  redirectUrl?: RedirectUrl;
  /** The optional source of the decrypted device token. */
  cardSource?: CardSource1;
  /** The original card scheme for which the token was generated. */
  cardScheme?: CardScheme41;
  /** The last 4 digits of the original card used to generate the token. */
  cardSuffix?: CardSuffix2;
  /** The card holder name associated to the original card for the token. */
  cardholderName?: CardholderName;
  /** The ecommerce indicator for the token. */
  eci?: Eci;
};

export const networkTokenPaymentMethodCreateSchema: Schema<NetworkTokenPaymentMethodCreate> =
  s.object<NetworkTokenPaymentMethodCreate>({
    method: s.defaulted(s.literal("network-token"), "network-token"),
    token: s.string(),
    expirationDate: s.string(),
    cryptogram: s.optional(s.lazy(() => cryptogram1Schema)),
    redirectUrl: s.optional(s.lazy(() => redirectUrlSchema)),
    cardSource: s.optional(s.lazy(() => cardSource1Schema)),
    cardScheme: s.optional(s.lazy(() => cardScheme41Schema)),
    cardSuffix: s.optional(s.lazy(() => cardSuffix2Schema)),
    cardholderName: s.optional(s.lazy(() => cardholderNameSchema)),
    eci: s.optional(s.lazy(() => eciSchema)),
    _keysMap: {
      expirationDate: "expiration_date",
      redirectUrl: "redirect_url",
      cardSource: "card_source",
      cardScheme: "card_scheme",
      cardSuffix: "card_suffix",
      cardholderName: "cardholder_name",
    },
  });
