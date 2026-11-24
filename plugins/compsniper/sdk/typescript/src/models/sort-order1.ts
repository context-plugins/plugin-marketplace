import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SortOrder1 = {
  EndedRecently: "endedRecently",
  TimeNewlyListed: "timeNewlyListed",
  PricePlusPostageLowest: "pricePlusPostageLowest",
  PricePlusPostageHighest: "pricePlusPostageHighest",
} as const;
export type SortOrder1 = (typeof SortOrder1)[keyof typeof SortOrder1] | (string & {});

export const sortOrder1Schema: EnumSchema<SortOrder1> = s.enumOf<SortOrder1>(SortOrder1);
