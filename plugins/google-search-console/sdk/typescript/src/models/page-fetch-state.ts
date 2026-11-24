import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether or not Google could retrieve the page from your server. Equivalent to ["page
 * fetch"](https://support.google.com/webmasters/answer/9012289#index_coverage) in the URL
 * inspection report.
 */
export const PageFetchState = {
  PageFetchStateUnspecified: "PAGE_FETCH_STATE_UNSPECIFIED",
  Successful: "SUCCESSFUL",
  Soft404: "SOFT_404",
  BlockedRobotsTxt: "BLOCKED_ROBOTS_TXT",
  NotFound: "NOT_FOUND",
  AccessDenied: "ACCESS_DENIED",
  ServerError: "SERVER_ERROR",
  RedirectError: "REDIRECT_ERROR",
  AccessForbidden: "ACCESS_FORBIDDEN",
  Blocked4Xx: "BLOCKED_4XX",
  InternalCrawlError: "INTERNAL_CRAWL_ERROR",
  InvalidUrl: "INVALID_URL",
} as const;
export type PageFetchState = (typeof PageFetchState)[keyof typeof PageFetchState] | (string & {});

export const pageFetchStateSchema: EnumSchema<PageFetchState> = s.enumOf<PageFetchState>(PageFetchState);
