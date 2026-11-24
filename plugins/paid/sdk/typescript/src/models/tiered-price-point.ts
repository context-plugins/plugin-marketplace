import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  tieredPricePointTiersItemsSchema,
  type TieredPricePointTiersItems,
} from "./tiered-price-point-tiers-items.js";

export type TieredPricePoint = {
  currency: string;
  unitPrice: number;
  tiers: TieredPricePointTiersItems[];
  minQuantity?: number;
  maxQuantity?: number;
  includedQuantity?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tieredPricePointSchema: Schema<TieredPricePoint> = s.object<TieredPricePoint>(
  {
    currency: s.string(),
    unitPrice: s.float64(),
    tiers: s.array(s.lazy(() => tieredPricePointTiersItemsSchema)),
    minQuantity: s.optional(s.float64()),
    maxQuantity: s.optional(s.float64()),
    includedQuantity: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
