import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Search execution version for the Cribl Lake Dataset. Search execution v1 uses Event Breakers and
 * Datatypes, and v2 uses path filters. If omitted, default is v1.
 */
export const SearchVersion1 = {
  V1: "v1",
  V2: "v2",
} as const;
export type SearchVersion1 = (typeof SearchVersion1)[keyof typeof SearchVersion1] | (string & {});

export const searchVersion1Schema: EnumSchema<SearchVersion1> = s.enumOf<SearchVersion1>(SearchVersion1);
