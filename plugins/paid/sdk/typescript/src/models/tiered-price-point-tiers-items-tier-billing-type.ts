import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TieredPricePointTiersItemsTierBillingType = {
  Flat: "flat",
  PerUnit: "perUnit",
} as const;
export type TieredPricePointTiersItemsTierBillingType =
  | (typeof TieredPricePointTiersItemsTierBillingType)[keyof typeof TieredPricePointTiersItemsTierBillingType]
  | (string & {});

export const tieredPricePointTiersItemsTierBillingTypeSchema: EnumSchema<TieredPricePointTiersItemsTierBillingType> =
  s.enumOf<TieredPricePointTiersItemsTierBillingType>(TieredPricePointTiersItemsTierBillingType);
