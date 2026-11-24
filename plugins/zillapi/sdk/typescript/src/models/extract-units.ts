import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ExtractUnits = {
  Disabled: "disabled",
  All: "all",
  ForSale: "for_sale",
  RecentlySold: "recently_sold",
  ForRent: "for_rent",
  OffMarket: "off_market",
} as const;
export type ExtractUnits = (typeof ExtractUnits)[keyof typeof ExtractUnits] | (string & {});

export const extractUnitsSchema: EnumSchema<ExtractUnits> = s.enumOf<ExtractUnits>(ExtractUnits);
