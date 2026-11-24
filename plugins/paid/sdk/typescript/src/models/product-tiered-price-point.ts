import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  productTieredPricePointTiersItemsSchema,
  type ProductTieredPricePointTiersItems,
} from "./product-tiered-price-point-tiers-items.js";

export type ProductTieredPricePoint = {
  currency: string;
  unitPrice: number;
  tiers: ProductTieredPricePointTiersItems[];
  minQuantity?: number;
  maxQuantity?: number;
  includedQuantity?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productTieredPricePointSchema: Schema<ProductTieredPricePoint> =
  s.object<ProductTieredPricePoint>(
    {
      currency: s.string(),
      unitPrice: s.float64(),
      tiers: s.array(s.lazy(() => productTieredPricePointTiersItemsSchema)),
      minQuantity: s.optional(s.float64()),
      maxQuantity: s.optional(s.float64()),
      includedQuantity: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
