import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { binSchema, type Bin } from "./unions/bin.js";
import { cardCountrySchema, type CardCountry } from "./unions/card-country.js";
import { cardIssuerNameSchema, type CardIssuerName } from "./unions/card-issuer-name.js";
import { cardType111Schema, type CardType111 } from "./unions/card-type111.js";

export type CheckoutSessionPaymentMethodDetails = {
  /** The first 6 digit of the card. */
  bin?: Bin;
  /** The country of the card issuer. */
  cardCountry?: CardCountry;
  /** The payment scheme of the card. */
  cardType?: CardType111;
  /** The card issuer. */
  cardIssuerName?: CardIssuerName;
};

export const checkoutSessionPaymentMethodDetailsSchema: Schema<CheckoutSessionPaymentMethodDetails> =
  s.object<CheckoutSessionPaymentMethodDetails>({
    bin: s.optional(s.lazy(() => binSchema)),
    cardCountry: s.optional(s.lazy(() => cardCountrySchema)),
    cardType: s.optional(s.lazy(() => cardType111Schema)),
    cardIssuerName: s.optional(s.lazy(() => cardIssuerNameSchema)),
    _keysMap: {
      cardCountry: "card_country",
      cardType: "card_type",
      cardIssuerName: "card_issuer_name",
    },
  });
