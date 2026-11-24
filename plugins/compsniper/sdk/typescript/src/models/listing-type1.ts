import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ListingType1 = {
  Sold: "sold",
} as const;
export type ListingType1 = (typeof ListingType1)[keyof typeof ListingType1] | (string & {});

export const listingType1Schema: EnumSchema<ListingType1> = s.enumOf<ListingType1>(ListingType1);
