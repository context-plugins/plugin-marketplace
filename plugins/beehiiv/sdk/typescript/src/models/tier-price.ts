import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tierPriceCurrencySchema, type TierPriceCurrency } from "./tier-price-currency.js";
import { tierPriceIntervalSchema, type TierPriceInterval } from "./tier-price-interval.js";

/** Price belonging to a Tier */
export type TierPrice = {
  /** The prefixed ID of the price. */
  id?: string;
  currency?: TierPriceCurrency;
  amountCents?: number;
  /** @default true */
  enabled?: boolean;
  interval?: TierPriceInterval;
  denominator?: string;
  /** When using the external Stripe checkout, this text will be displayed on the button */
  cta?: string;
  features?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tierPriceSchema: Schema<TierPrice> = s.object<TierPrice>(
  {
    id: s.optional(s.string()),
    currency: s.optional(s.lazy(() => tierPriceCurrencySchema)),
    amountCents: s.optional(s.int()),
    enabled: s.defaulted(s.boolean(), true),
    interval: s.optional(s.lazy(() => tierPriceIntervalSchema)),
    denominator: s.optional(s.string()),
    cta: s.optional(s.string()),
    features: s.optional(s.array(s.string())),
    _keysMap: {
      amountCents: "amount_cents",
    },
  },
  { additionalProperties: s.json() },
);
