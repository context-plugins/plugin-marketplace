import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SearchService1 = {
  Google: "google",
  Bing: "bing",
  Duckduckgo: "duckduckgo",
  Yahoo: "yahoo",
  Hackernews: "hackernews",
  Reuters: "reuters",
} as const;
export type SearchService1 = (typeof SearchService1)[keyof typeof SearchService1] | (string & {});

export const searchService1Schema: EnumSchema<SearchService1> = s.enumOf<SearchService1>(SearchService1);
