import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the sitemap. For example: `rssFeed`. */
export const TypeGoogleSearchConsoleSitemapsApi = {
  NotSitemap: "NOT_SITEMAP",
  UrlList: "URL_LIST",
  Sitemap: "SITEMAP",
  RssFeed: "RSS_FEED",
  AtomFeed: "ATOM_FEED",
  PatternSitemap: "PATTERN_SITEMAP",
  Oceanfront: "OCEANFRONT",
} as const;
export type TypeGoogleSearchConsoleSitemapsApi =
  | (typeof TypeGoogleSearchConsoleSitemapsApi)[keyof typeof TypeGoogleSearchConsoleSitemapsApi]
  | (string & {});

export const typeGoogleSearchConsoleSitemapsApiSchema: EnumSchema<TypeGoogleSearchConsoleSitemapsApi> =
  s.enumOf<TypeGoogleSearchConsoleSitemapsApi>(TypeGoogleSearchConsoleSitemapsApi);
