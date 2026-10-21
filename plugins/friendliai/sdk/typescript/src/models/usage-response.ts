import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nextPageSchema, type NextPage } from "./unions/next-page.js";
import { usageBucketSchema, type UsageBucket } from "./usage-bucket.js";

/** Usage response. */
export type UsageResponse = {
  /** The items in this page. */
  data: UsageBucket[];
  /** Whether more items are available beyond this page. */
  hasMore: boolean;
  /** A cursor to fetch the next page. Null when there are no more results. */
  nextPage?: NextPage;
};

export const usageResponseSchema: Schema<UsageResponse> = s.object<UsageResponse>({
  data: s.array(s.lazy(() => usageBucketSchema)),
  hasMore: s.boolean(),
  nextPage: s.optional(s.lazy(() => nextPageSchema)),
  _keysMap: {
    hasMore: "has_more",
    nextPage: "next_page",
  },
});
