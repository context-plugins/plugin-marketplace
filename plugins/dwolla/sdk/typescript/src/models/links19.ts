import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { exchangePartner1Schema, type ExchangePartner1 } from "./exchange-partner1.js";

export type Links19 = {
  exchangePartner: ExchangePartner1;
};

export const links19Schema: Schema<Links19> = s.object<Links19>({
  exchangePartner: exchangePartner1Schema,
  _keysMap: {
    exchangePartner: "exchange-partner",
  },
});
