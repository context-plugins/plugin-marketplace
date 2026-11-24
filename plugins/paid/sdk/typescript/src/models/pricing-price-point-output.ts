import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  pricingPricePointOutputTiersItemsSchema,
  type PricingPricePointOutputTiersItems,
} from "./pricing-price-point-output-tiers-items.js";

export type PricingPricePointOutput = {
  currency: string;
  unitPrice: number;
  tiers?: PricingPricePointOutputTiersItems[];
  minQuantity?: number;
  maxQuantity?: number;
  includedQuantity?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pricingPricePointOutputSchema: Schema<PricingPricePointOutput> =
  s.object<PricingPricePointOutput>(
    {
      currency: s.string(),
      unitPrice: s.float64(),
      tiers: s.optional(s.array(s.lazy(() => pricingPricePointOutputTiersItemsSchema))),
      minQuantity: s.optional(s.float64()),
      maxQuantity: s.optional(s.float64()),
      includedQuantity: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
