import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether or not Google could fetch the AMP. */
export const PageFetchState1 = {
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
export type PageFetchState1 = (typeof PageFetchState1)[keyof typeof PageFetchState1] | (string & {});

export const pageFetchState1Schema: EnumSchema<PageFetchState1> = s.enumOf<PageFetchState1>(PageFetchState1);
