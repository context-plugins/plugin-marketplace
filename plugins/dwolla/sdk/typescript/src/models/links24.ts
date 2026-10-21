import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { exchangePartner7Schema, type ExchangePartner7 } from "./exchange-partner7.js";

export type Links24 = {
  exchangePartner: ExchangePartner7;
};

export const links24Schema: Schema<Links24> = s.object<Links24>({
  exchangePartner: exchangePartner7Schema,
  _keysMap: {
    exchangePartner: "exchange-partner",
  },
});
