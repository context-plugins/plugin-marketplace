import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { exchangePartner3Schema, type ExchangePartner3 } from "./exchange-partner3.js";
import { redirectUrlSchema, type RedirectUrl } from "./redirect-url.js";

export type Links22 = {
  exchangePartner: ExchangePartner3;
  redirectUrl: RedirectUrl;
};

export const links22Schema: Schema<Links22> = s.object<Links22>({
  exchangePartner: exchangePartner3Schema,
  redirectUrl: redirectUrlSchema,
  _keysMap: {
    exchangePartner: "exchange-partner",
    redirectUrl: "redirect-url",
  },
});
