import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** [Optional; Default is \"web\"] The search type to filter for. */
export const SearchType = {
  Web: "WEB",
  Image: "IMAGE",
  Video: "VIDEO",
  News: "NEWS",
  Discover: "DISCOVER",
  GoogleNews: "GOOGLE_NEWS",
} as const;
export type SearchType = (typeof SearchType)[keyof typeof SearchType] | (string & {});

export const searchTypeSchema: EnumSchema<SearchType> = s.enumOf<SearchType>(SearchType);
