import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tierPriceCurrencySchema, type TierPriceCurrency } from "./tier-price-currency.js";
import { tierPriceIntervalSchema, type TierPriceInterval } from "./tier-price-interval.js";

export type TierPricesAttributesItem = {
  currency: TierPriceCurrency;
  amountCents: number;
  /** @default true */
  enabled?: boolean;
  interval: TierPriceInterval;
  intervalDisplay?: string;
  cta?: string;
  features?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tierPricesAttributesItemSchema: Schema<TierPricesAttributesItem> =
  s.object<TierPricesAttributesItem>(
    {
      currency: tierPriceCurrencySchema,
      amountCents: s.int(),
      enabled: s.defaulted(s.boolean(), true),
      interval: tierPriceIntervalSchema,
      intervalDisplay: s.optional(s.string()),
      cta: s.optional(s.string()),
      features: s.optional(s.array(s.string())),
      _keysMap: {
        amountCents: "amount_cents",
        intervalDisplay: "interval_display",
      },
    },
    { additionalProperties: s.json() },
  );
