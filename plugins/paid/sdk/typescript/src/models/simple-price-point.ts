import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  simplePricePointTiersItemsSchema,
  type SimplePricePointTiersItems,
} from "./simple-price-point-tiers-items.js";

export type SimplePricePoint = {
  currency: string;
  unitPrice: number;
  tiers?: SimplePricePointTiersItems[];
  minQuantity?: number;
  maxQuantity?: number;
  includedQuantity?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const simplePricePointSchema: Schema<SimplePricePoint> = s.object<SimplePricePoint>(
  {
    currency: s.string(),
    unitPrice: s.float64(),
    tiers: s.optional(s.array(s.lazy(() => simplePricePointTiersItemsSchema))),
    minQuantity: s.optional(s.float64()),
    maxQuantity: s.optional(s.float64()),
    includedQuantity: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
