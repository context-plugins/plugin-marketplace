import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  tieredPricePointTiersItemsTierBillingTypeSchema,
  type TieredPricePointTiersItemsTierBillingType,
} from "./tiered-price-point-tiers-items-tier-billing-type.js";

export type TieredPricePointTiersItems = {
  flatAmount?: number;
  index?: number;
  lowerBound: number;
  number?: number;
  tierBillingType?: TieredPricePointTiersItemsTierBillingType;
  unitAmount?: number;
  upperBound?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tieredPricePointTiersItemsSchema: Schema<TieredPricePointTiersItems> =
  s.object<TieredPricePointTiersItems>(
    {
      flatAmount: s.optional(s.float64()),
      index: s.optional(s.float64()),
      lowerBound: s.float64(),
      number: s.optional(s.float64()),
      tierBillingType: s.optional(s.lazy(() => tieredPricePointTiersItemsTierBillingTypeSchema)),
      unitAmount: s.optional(s.float64()),
      upperBound: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
