import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { exchangePartner3Schema, type ExchangePartner3 } from "./exchange-partner3.js";

export type Links20 = {
  exchangePartner: ExchangePartner3;
};

export const links20Schema: Schema<Links20> = s.object<Links20>({
  exchangePartner: exchangePartner3Schema,
  _keysMap: {
    exchangePartner: "exchange-partner",
  },
});
