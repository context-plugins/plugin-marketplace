import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The level of visual distinction that should be given to a result. */
export const SearchResultProminenceEnum = {
  Hero: "HERO",
  Promoted: "PROMOTED",
  Standard: "STANDARD",
} as const;
export type SearchResultProminenceEnum =
  | (typeof SearchResultProminenceEnum)[keyof typeof SearchResultProminenceEnum]
  | (string & {});

export const searchResultProminenceEnumSchema: EnumSchema<SearchResultProminenceEnum> =
  s.enumOf<SearchResultProminenceEnum>(SearchResultProminenceEnum);
