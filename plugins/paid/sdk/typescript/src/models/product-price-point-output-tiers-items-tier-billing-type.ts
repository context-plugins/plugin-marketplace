import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricePointOutputTiersItemsTierBillingType = {
  Flat: "flat",
  PerUnit: "perUnit",
} as const;
export type ProductPricePointOutputTiersItemsTierBillingType =
  | (typeof ProductPricePointOutputTiersItemsTierBillingType)[keyof typeof ProductPricePointOutputTiersItemsTierBillingType]
  | (string & {});

export const productPricePointOutputTiersItemsTierBillingTypeSchema: EnumSchema<ProductPricePointOutputTiersItemsTierBillingType> =
  s.enumOf<ProductPricePointOutputTiersItemsTierBillingType>(
    ProductPricePointOutputTiersItemsTierBillingType,
  );
