import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExchangePartner1 = {
  href?: string;
};

export const exchangePartner1Schema: Schema<ExchangePartner1> = s.object<ExchangePartner1>({
  href: s.optional(s.string()),
});
