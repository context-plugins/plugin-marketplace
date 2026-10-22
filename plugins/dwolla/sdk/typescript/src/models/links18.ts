import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { exchangePartner1Schema, type ExchangePartner1 } from "./exchange-partner1.js";

export type Links18 = {
  exchangePartner?: ExchangePartner1;
};

export const links18Schema: Schema<Links18> = s.object<Links18>({
  exchangePartner: s.optional(s.lazy(() => exchangePartner1Schema)),
  _keysMap: {
    exchangePartner: "exchange-partner",
  },
});
