import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SearchField = {
  Status: "status",
} as const;
export type SearchField = (typeof SearchField)[keyof typeof SearchField] | (string & {});

export const searchFieldSchema: EnumSchema<SearchField> = s.enumOf<SearchField>(SearchField);
