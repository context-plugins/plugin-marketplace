import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SortByPerigonWikipediaApi = {
  Relevance: "relevance",
  RevisionTsDesc: "revisionTsDesc",
  RevisionTsAsc: "revisionTsAsc",
  PageViewsDesc: "pageViewsDesc",
  PageViewsAsc: "pageViewsAsc",
  ScrapedAtDesc: "scrapedAtDesc",
  ScrapedAtAsc: "scrapedAtAsc",
} as const;
export type SortByPerigonWikipediaApi =
  | (typeof SortByPerigonWikipediaApi)[keyof typeof SortByPerigonWikipediaApi]
  | (string & {});

export const sortByPerigonWikipediaApiSchema: EnumSchema<SortByPerigonWikipediaApi> =
  s.enumOf<SortByPerigonWikipediaApi>(SortByPerigonWikipediaApi);
