import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { crawledAsSchema, type CrawledAs } from "./crawled-as.js";
import { indexingStateSchema, type IndexingState } from "./indexing-state.js";
import { pageFetchStateSchema, type PageFetchState } from "./page-fetch-state.js";
import { robotsTxtStateSchema, type RobotsTxtState } from "./robots-txt-state.js";
import { verdict1Schema, type Verdict1 } from "./verdict1.js";

/**
 * Results of index status inspection for either the live page or the version in Google's index,
 * depending on whether you requested a live inspection or not. For more information, see the [Index
 * coverage report documentation](https://support.google.com/webmasters/answer/7440203).
 */
export type IndexStatusInspectionResult = {
  /** Whether or not the page blocks indexing through a noindex rule. */
  indexingState?: IndexingState;
  /**
   * The URL that your page or site [declares as
   * canonical](https://developers.google.com/search/docs/advanced/crawling/consolidate-duplicate-urls?#define-canonical).
   * If you did not declare a canonical URL, this field is absent.
   */
  userCanonical?: string;
  /** Primary crawler that was used by Google to crawl your site. */
  crawledAs?: CrawledAs;
  /**
   * Could Google find and index the page. More details about page indexing appear in
   * 'indexing_state'.
   */
  coverageState?: string;
  /** URLs that link to the inspected URL, directly and indirectly. */
  referringUrls?: string[];
  /**
   * Whether or not Google could retrieve the page from your server. Equivalent to ["page
   * fetch"](https://support.google.com/webmasters/answer/9012289#index_coverage) in the URL
   * inspection report.
   */
  pageFetchState?: PageFetchState;
  /** Whether or not the page is blocked to Google by a robots.txt rule. */
  robotsTxtState?: RobotsTxtState;
  /**
   * High level verdict about whether the URL *is* indexed (indexed status), or *can be* indexed
   * (live inspection).
   */
  verdict?: Verdict1;
  /**
   * The URL of the page that Google selected as canonical. If the page was not indexed, this field
   * is absent.
   */
  googleCanonical?: string;
  /**
   * Any sitemaps that this URL was listed in, as known by Google. Not guaranteed to be an
   * exhaustive list, especially if Google did not discover this URL through a sitemap. Absent if no
   * sitemaps were found.
   */
  sitemap?: string[];
  /**
   * Last time this URL was crawled by Google using the [primary
   * crawler](https://support.google.com/webmasters/answer/7440203#primary_crawler). Absent if the
   * URL was never crawled successfully.
   */
  lastCrawlTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const indexStatusInspectionResultSchema: Schema<IndexStatusInspectionResult> =
  s.object<IndexStatusInspectionResult>(
    {
      indexingState: s.optional(s.lazy(() => indexingStateSchema)),
      userCanonical: s.optional(s.string()),
      crawledAs: s.optional(s.lazy(() => crawledAsSchema)),
      coverageState: s.optional(s.string()),
      referringUrls: s.optional(s.array(s.string())),
      pageFetchState: s.optional(s.lazy(() => pageFetchStateSchema)),
      robotsTxtState: s.optional(s.lazy(() => robotsTxtStateSchema)),
      verdict: s.optional(s.lazy(() => verdict1Schema)),
      googleCanonical: s.optional(s.string()),
      sitemap: s.optional(s.array(s.string())),
      lastCrawlTime: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
