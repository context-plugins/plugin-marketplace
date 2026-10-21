import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Method13, method13Schema } from "./method13.js";
import { cardScheme411Schema, type CardScheme411 } from "./unions/card-scheme411.js";
import { externalIdentifier23Schema, type ExternalIdentifier23 } from "./unions/external-identifier23.js";

export type PaymentMethodCard = {
  /** Set to `card` to use a new card. @default Method13.Card */
  method?: Method13;
  /** The 13-19 digit number for this card as it can be found on the front of the card. */
  number: string;
  /** The expiration date of the card, formatted `MM/YY`. */
  expirationDate: string;
  /** The optional card's network scheme. */
  cardScheme?: CardScheme411;
  /** The merchant identifier for this card. */
  externalIdentifier?: ExternalIdentifier23;
};

export const paymentMethodCardSchema: Schema<PaymentMethodCard> = s.object<PaymentMethodCard>({
  method: s.defaulted(method13Schema, Method13.Card),
  number: s.string(),
  expirationDate: s.string(),
  cardScheme: s.optional(s.lazy(() => cardScheme411Schema)),
  externalIdentifier: s.optional(s.lazy(() => externalIdentifier23Schema)),
  _keysMap: {
    expirationDate: "expiration_date",
    cardScheme: "card_scheme",
    externalIdentifier: "external_identifier",
  },
});
