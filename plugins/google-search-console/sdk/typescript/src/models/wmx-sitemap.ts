import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeGoogleSearchConsoleSitemapsApiSchema,
  type TypeGoogleSearchConsoleSitemapsApi,
} from "./type-google-search-console-sitemaps-api.js";
import { wmxSitemapContentSchema, type WmxSitemapContent } from "./wmx-sitemap-content.js";

/**
 * Contains detailed information about a specific URL submitted as a
 * [sitemap](https://support.google.com/webmasters/answer/156184).
 */
export type WmxSitemap = {
  /** The type of the sitemap. For example: `rssFeed`. */
  type?: TypeGoogleSearchConsoleSitemapsApi;
  /** The various content types in the sitemap. */
  contents?: WmxSitemapContent[];
  /**
   * Date & time in which this sitemap was submitted. Date format is in RFC 3339 format
   * (yyyy-mm-dd).
   */
  lastSubmitted?: string;
  /** If true, the sitemap is a collection of sitemaps. */
  isSitemapsIndex?: boolean;
  /** The url of the sitemap. */
  path?: string;
  /**
   * Date & time in which this sitemap was last downloaded. Date format is in RFC 3339 format
   * (yyyy-mm-dd).
   */
  lastDownloaded?: string;
  /** If true, the sitemap has not been processed. */
  isPending?: boolean;
  /**
   * Number of warnings for the sitemap. These are generally non-critical issues with URLs in the
   * sitemaps.
   */
  warnings?: string;
  /**
   * Number of errors in the sitemap. These are issues with the sitemap itself that need to be fixed
   * before it can be processed correctly.
   */
  errors?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const wmxSitemapSchema: Schema<WmxSitemap> = s.object<WmxSitemap>(
  {
    type: s.optional(s.lazy(() => typeGoogleSearchConsoleSitemapsApiSchema)),
    contents: s.optional(s.array(s.lazy(() => wmxSitemapContentSchema))),
    lastSubmitted: s.optional(s.string()),
    isSitemapsIndex: s.optional(s.boolean()),
    path: s.optional(s.string()),
    lastDownloaded: s.optional(s.string()),
    isPending: s.optional(s.boolean()),
    warnings: s.optional(s.string()),
    errors: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
