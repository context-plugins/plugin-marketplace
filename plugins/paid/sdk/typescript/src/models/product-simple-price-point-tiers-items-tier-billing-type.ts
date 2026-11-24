import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductSimplePricePointTiersItemsTierBillingType = {
  Flat: "flat",
  PerUnit: "perUnit",
} as const;
export type ProductSimplePricePointTiersItemsTierBillingType =
  | (typeof ProductSimplePricePointTiersItemsTierBillingType)[keyof typeof ProductSimplePricePointTiersItemsTierBillingType]
  | (string & {});

export const productSimplePricePointTiersItemsTierBillingTypeSchema: EnumSchema<ProductSimplePricePointTiersItemsTierBillingType> =
  s.enumOf<ProductSimplePricePointTiersItemsTierBillingType>(
    ProductSimplePricePointTiersItemsTierBillingType,
  );
