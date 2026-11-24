import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  pricingPricePointOutputTiersItemsTierBillingTypeSchema,
  type PricingPricePointOutputTiersItemsTierBillingType,
} from "./pricing-price-point-output-tiers-items-tier-billing-type.js";

export type PricingPricePointOutputTiersItems = {
  flatAmount?: number;
  index?: number;
  lowerBound: number;
  number?: number;
  tierBillingType?: PricingPricePointOutputTiersItemsTierBillingType;
  unitAmount?: number;
  upperBound?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pricingPricePointOutputTiersItemsSchema: Schema<PricingPricePointOutputTiersItems> =
  s.object<PricingPricePointOutputTiersItems>(
    {
      flatAmount: s.optional(s.float64()),
      index: s.optional(s.float64()),
      lowerBound: s.float64(),
      number: s.optional(s.float64()),
      tierBillingType: s.optional(s.lazy(() => pricingPricePointOutputTiersItemsTierBillingTypeSchema)),
      unitAmount: s.optional(s.float64()),
      upperBound: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
