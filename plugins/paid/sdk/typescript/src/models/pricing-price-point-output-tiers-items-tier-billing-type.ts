import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PricingPricePointOutputTiersItemsTierBillingType = {
  Flat: "flat",
  PerUnit: "perUnit",
} as const;
export type PricingPricePointOutputTiersItemsTierBillingType =
  | (typeof PricingPricePointOutputTiersItemsTierBillingType)[keyof typeof PricingPricePointOutputTiersItemsTierBillingType]
  | (string & {});

export const pricingPricePointOutputTiersItemsTierBillingTypeSchema: EnumSchema<PricingPricePointOutputTiersItemsTierBillingType> =
  s.enumOf<PricingPricePointOutputTiersItemsTierBillingType>(
    PricingPricePointOutputTiersItemsTierBillingType,
  );
