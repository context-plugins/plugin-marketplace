import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExchangePartner3 = {
  href: string;
};

export const exchangePartner3Schema: Schema<ExchangePartner3> = s.object<ExchangePartner3>({
  href: s.string(),
});
