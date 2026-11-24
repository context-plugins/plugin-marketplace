import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  productPricePointOutputTiersItemsSchema,
  type ProductPricePointOutputTiersItems,
} from "./product-price-point-output-tiers-items.js";

export type ProductPricePointOutput = {
  currency: string;
  unitPrice: number;
  tiers?: ProductPricePointOutputTiersItems[];
  minQuantity?: number;
  maxQuantity?: number;
  includedQuantity?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productPricePointOutputSchema: Schema<ProductPricePointOutput> =
  s.object<ProductPricePointOutput>(
    {
      currency: s.string(),
      unitPrice: s.float64(),
      tiers: s.optional(s.array(s.lazy(() => productPricePointOutputTiersItemsSchema))),
      minQuantity: s.optional(s.float64()),
      maxQuantity: s.optional(s.float64()),
      includedQuantity: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
