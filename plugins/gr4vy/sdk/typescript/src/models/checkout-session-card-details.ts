import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardSchemeSchema, type CardScheme } from "./card-scheme.js";
import { cardType12Schema, type CardType12 } from "./unions/card-type12.js";
import { country2Schema, type Country2 } from "./unions/country2.js";
import { schemeIconUrlSchema, type SchemeIconUrl } from "./unions/scheme-icon-url.js";
import { scheme211Schema, type Scheme211 } from "./unions/scheme211.js";

export type CheckoutSessionCardDetails = {
  /** The card BIN provided in the request. */
  bin: string;
  /** The type of the card. */
  cardType?: CardType12;
  /** The scheme of the card. */
  scheme?: Scheme211;
  /** URL to the card scheme's icon. */
  schemeIconUrl?: SchemeIconUrl;
  /** Additional card schemes associated with the BIN. */
  additionalSchemes?: CardScheme[];
  /** The country the card was issued in. */
  country?: Country2;
};

export const checkoutSessionCardDetailsSchema: Schema<CheckoutSessionCardDetails> =
  s.object<CheckoutSessionCardDetails>({
    bin: s.string(),
    cardType: s.optional(s.lazy(() => cardType12Schema)),
    scheme: s.optional(s.lazy(() => scheme211Schema)),
    schemeIconUrl: s.optional(s.lazy(() => schemeIconUrlSchema)),
    additionalSchemes: s.optional(s.array(s.lazy(() => cardSchemeSchema))),
    country: s.optional(s.lazy(() => country2Schema)),
    _keysMap: {
      cardType: "card_type",
      schemeIconUrl: "scheme_icon_url",
      additionalSchemes: "additional_schemes",
    },
  });
