import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SearchVersion = {
  V1: "v1",
  V2: "v2",
} as const;
export type SearchVersion = (typeof SearchVersion)[keyof typeof SearchVersion] | (string & {});

export const searchVersionSchema: EnumSchema<SearchVersion> = s.enumOf<SearchVersion>(SearchVersion);
