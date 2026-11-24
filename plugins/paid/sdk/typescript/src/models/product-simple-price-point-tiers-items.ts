import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  productSimplePricePointTiersItemsTierBillingTypeSchema,
  type ProductSimplePricePointTiersItemsTierBillingType,
} from "./product-simple-price-point-tiers-items-tier-billing-type.js";

export type ProductSimplePricePointTiersItems = {
  flatAmount?: number;
  index?: number;
  lowerBound: number;
  number?: number;
  tierBillingType?: ProductSimplePricePointTiersItemsTierBillingType;
  unitAmount?: number;
  upperBound?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productSimplePricePointTiersItemsSchema: Schema<ProductSimplePricePointTiersItems> =
  s.object<ProductSimplePricePointTiersItems>(
    {
      flatAmount: s.optional(s.float64()),
      index: s.optional(s.float64()),
      lowerBound: s.float64(),
      number: s.optional(s.float64()),
      tierBillingType: s.optional(s.lazy(() => productSimplePricePointTiersItemsTierBillingTypeSchema)),
      unitAmount: s.optional(s.float64()),
      upperBound: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
