import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SearchField2 = {
  Status: "status",
  Filename: "filename",
} as const;
export type SearchField2 = (typeof SearchField2)[keyof typeof SearchField2] | (string & {});

export const searchField2Schema: EnumSchema<SearchField2> = s.enumOf<SearchField2>(SearchField2);
