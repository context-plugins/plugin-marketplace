import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncludeUnits = {
  All: "all",
  ForSale: "for_sale",
  ForRent: "for_rent",
  RecentlySold: "recently_sold",
  OffMarket: "off_market",
} as const;
export type IncludeUnits = (typeof IncludeUnits)[keyof typeof IncludeUnits] | (string & {});

export const includeUnitsSchema: EnumSchema<IncludeUnits> = s.enumOf<IncludeUnits>(IncludeUnits);
