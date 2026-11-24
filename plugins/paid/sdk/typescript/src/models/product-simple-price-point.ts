import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  productSimplePricePointTiersItemsSchema,
  type ProductSimplePricePointTiersItems,
} from "./product-simple-price-point-tiers-items.js";

export type ProductSimplePricePoint = {
  currency: string;
  unitPrice: number;
  tiers?: ProductSimplePricePointTiersItems[];
  minQuantity?: number;
  maxQuantity?: number;
  includedQuantity?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productSimplePricePointSchema: Schema<ProductSimplePricePoint> =
  s.object<ProductSimplePricePoint>(
    {
      currency: s.string(),
      unitPrice: s.float64(),
      tiers: s.optional(s.array(s.lazy(() => productSimplePricePointTiersItemsSchema))),
      minQuantity: s.optional(s.float64()),
      maxQuantity: s.optional(s.float64()),
      includedQuantity: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
