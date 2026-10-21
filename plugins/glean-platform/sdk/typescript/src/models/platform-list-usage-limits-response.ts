import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformUsageLimitSchema, type PlatformUsageLimit } from "./platform-usage-limit.js";

/** Response body for listing configured usage limits. */
export type PlatformListUsageLimitsResponse = {
  /**
   * Up to page_size matching configured limits. The service scans past omitted rules to fill the
   * page unless the collection is exhausted. Continue with next_cursor and the same filters while
   * has_more is true.
   */
  results: PlatformUsageLimit[];
  /** Whether more rules remain to scan; later pages may contain no matching results. */
  hasMore: boolean;
  /** Opaque cursor; null or absent when has_more is false. */
  nextCursor?: string | null;
  /** Request identifier for correlating this response. */
  requestId: string;
};

export const platformListUsageLimitsResponseSchema: Schema<PlatformListUsageLimitsResponse> =
  s.object<PlatformListUsageLimitsResponse>({
    results: s.array(s.lazy(() => platformUsageLimitSchema)),
    hasMore: s.boolean(),
    nextCursor: s.optionalNullable(s.string()),
    requestId: s.string(),
    _keysMap: {
      hasMore: "has_more",
      nextCursor: "next_cursor",
      requestId: "request_id",
    },
  });
