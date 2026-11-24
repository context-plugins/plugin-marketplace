import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SimplePricePointTiersItemsTierBillingType = {
  Flat: "flat",
  PerUnit: "perUnit",
} as const;
export type SimplePricePointTiersItemsTierBillingType =
  | (typeof SimplePricePointTiersItemsTierBillingType)[keyof typeof SimplePricePointTiersItemsTierBillingType]
  | (string & {});

export const simplePricePointTiersItemsTierBillingTypeSchema: EnumSchema<SimplePricePointTiersItemsTierBillingType> =
  s.enumOf<SimplePricePointTiersItemsTierBillingType>(SimplePricePointTiersItemsTierBillingType);
