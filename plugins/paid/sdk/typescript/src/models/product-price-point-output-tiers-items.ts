import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  productPricePointOutputTiersItemsTierBillingTypeSchema,
  type ProductPricePointOutputTiersItemsTierBillingType,
} from "./product-price-point-output-tiers-items-tier-billing-type.js";

export type ProductPricePointOutputTiersItems = {
  flatAmount?: number;
  index?: number;
  lowerBound: number;
  number?: number;
  tierBillingType?: ProductPricePointOutputTiersItemsTierBillingType;
  unitAmount?: number;
  upperBound?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productPricePointOutputTiersItemsSchema: Schema<ProductPricePointOutputTiersItems> =
  s.object<ProductPricePointOutputTiersItems>(
    {
      flatAmount: s.optional(s.float64()),
      index: s.optional(s.float64()),
      lowerBound: s.float64(),
      number: s.optional(s.float64()),
      tierBillingType: s.optional(s.lazy(() => productPricePointOutputTiersItemsTierBillingTypeSchema)),
      unitAmount: s.optional(s.float64()),
      upperBound: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
