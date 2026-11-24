import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ExtractBuildingUnits = {
  Disabled: "disabled",
  All: "all",
  ForSale: "for_sale",
  RecentlySold: "recently_sold",
  ForRent: "for_rent",
  OffMarket: "off_market",
} as const;
export type ExtractBuildingUnits =
  | (typeof ExtractBuildingUnits)[keyof typeof ExtractBuildingUnits]
  | (string & {});

export const extractBuildingUnitsSchema: EnumSchema<ExtractBuildingUnits> =
  s.enumOf<ExtractBuildingUnits>(ExtractBuildingUnits);
