import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExchangePartner8 = {
  href: string;
  type: string;
  resourceType: string;
};

export const exchangePartner8Schema: Schema<ExchangePartner8> = s.object<ExchangePartner8>({
  href: s.string(),
  type: s.string(),
  resourceType: s.string(),
  _keysMap: {
    resourceType: "resource-type",
  },
});
