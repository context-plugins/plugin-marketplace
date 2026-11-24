import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SortOrder = {
  EndedRecently: "endedRecently",
  TimeNewlyListed: "timeNewlyListed",
  PricePlusPostageLowest: "pricePlusPostageLowest",
  PricePlusPostageHighest: "pricePlusPostageHighest",
  DistanceNearest: "distanceNearest",
} as const;
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder] | (string & {});

export const sortOrderSchema: EnumSchema<SortOrder> = s.enumOf<SortOrder>(SortOrder);
