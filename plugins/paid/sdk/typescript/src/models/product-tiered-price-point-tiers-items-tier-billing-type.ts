import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductTieredPricePointTiersItemsTierBillingType = {
  Flat: "flat",
  PerUnit: "perUnit",
} as const;
export type ProductTieredPricePointTiersItemsTierBillingType =
  | (typeof ProductTieredPricePointTiersItemsTierBillingType)[keyof typeof ProductTieredPricePointTiersItemsTierBillingType]
  | (string & {});

export const productTieredPricePointTiersItemsTierBillingTypeSchema: EnumSchema<ProductTieredPricePointTiersItemsTierBillingType> =
  s.enumOf<ProductTieredPricePointTiersItemsTierBillingType>(
    ProductTieredPricePointTiersItemsTierBillingType,
  );
