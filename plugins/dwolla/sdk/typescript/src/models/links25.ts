import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { exchangePartner8Schema, type ExchangePartner8 } from "./exchange-partner8.js";
import { externalProviderSessionSchema, type ExternalProviderSession } from "./external-provider-session.js";
import { self6Schema, type Self6 } from "./self6.js";

export type Links25 = {
  self: Self6;
  exchangePartner: ExchangePartner8;
  externalProviderSession?: ExternalProviderSession;
};

export const links25Schema: Schema<Links25> = s.object<Links25>({
  self: self6Schema,
  exchangePartner: exchangePartner8Schema,
  externalProviderSession: s.optional(s.lazy(() => externalProviderSessionSchema)),
  _keysMap: {
    exchangePartner: "exchange-partner",
    externalProviderSession: "external-provider-session",
  },
});
