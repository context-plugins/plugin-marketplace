import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SearchType = {
  Top: "TOP",
  Latest: "LATEST",
  Media: "MEDIA",
} as const;
export type SearchType = (typeof SearchType)[keyof typeof SearchType] | (string & {});

export const searchTypeSchema: EnumSchema<SearchType> = s.enumOf<SearchType>(SearchType);
