import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bin1Schema, type Bin1 } from "./unions/bin1.js";
import { cardIssuerName1Schema, type CardIssuerName1 } from "./unions/card-issuer-name1.js";
import { cardType15Schema, type CardType15 } from "./unions/card-type15.js";

export type PaymentMethodDetailsCard = {
  bin?: Bin1;
  cardType?: CardType15;
  cardIssuerName?: CardIssuerName1;
};

export const paymentMethodDetailsCardSchema: Schema<PaymentMethodDetailsCard> =
  s.object<PaymentMethodDetailsCard>({
    bin: s.optional(s.lazy(() => bin1Schema)),
    cardType: s.optional(s.lazy(() => cardType15Schema)),
    cardIssuerName: s.optional(s.lazy(() => cardIssuerName1Schema)),
    _keysMap: {
      cardType: "card_type",
      cardIssuerName: "card_issuer_name",
    },
  });
