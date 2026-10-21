import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { exchangePartnerSchema, type ExchangePartner } from "./exchange-partner.js";

export type Embedded92 = {
  exchangePartners?: ExchangePartner[];
};

export const embedded92Schema: Schema<Embedded92> = s.object<Embedded92>({
  exchangePartners: s.optional(s.array(s.lazy(() => exchangePartnerSchema))),
  _keysMap: {
    exchangePartners: "exchange-partners",
  },
});
