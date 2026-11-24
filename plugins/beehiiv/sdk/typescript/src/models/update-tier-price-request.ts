import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tierPriceCurrencySchema, type TierPriceCurrency } from "./tier-price-currency.js";
import { tierPriceIntervalSchema, type TierPriceInterval } from "./tier-price-interval.js";

export type UpdateTierPriceRequest = {
  /** ID of the existing price. */
  id: string;
  currency: TierPriceCurrency;
  amountCents: number;
  interval: TierPriceInterval;
  intervalDisplay?: string;
  cta?: string;
  features?: string[];
  /** Optionally delete the price when updating the tier. @default false */
  delete?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateTierPriceRequestSchema: Schema<UpdateTierPriceRequest> = s.object<UpdateTierPriceRequest>(
  {
    id: s.string(),
    currency: tierPriceCurrencySchema,
    amountCents: s.int(),
    interval: tierPriceIntervalSchema,
    intervalDisplay: s.optional(s.string()),
    cta: s.optional(s.string()),
    features: s.optional(s.array(s.string())),
    delete: s.defaulted(s.boolean(), false),
    _keysMap: {
      amountCents: "amount_cents",
      intervalDisplay: "interval_display",
    },
  },
  { additionalProperties: s.json() },
);
