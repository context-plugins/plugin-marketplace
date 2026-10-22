import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExchangePartner7 = {
  /** URL of the cards exchange partner. Use `GET /exchange-partners` to locate it. */
  href: string;
};

export const exchangePartner7Schema: Schema<ExchangePartner7> = s.object<ExchangePartner7>({
  href: s.string(),
});
