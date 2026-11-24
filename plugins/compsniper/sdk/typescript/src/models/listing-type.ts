import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ListingType = {
  Active: "active",
} as const;
export type ListingType = (typeof ListingType)[keyof typeof ListingType] | (string & {});

export const listingTypeSchema: EnumSchema<ListingType> = s.enumOf<ListingType>(ListingType);
