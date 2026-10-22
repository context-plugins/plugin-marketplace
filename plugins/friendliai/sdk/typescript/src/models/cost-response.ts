import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { costBucketSchema, type CostBucket } from "./cost-bucket.js";
import { nextPageSchema, type NextPage } from "./unions/next-page.js";

/** Cost response. */
export type CostResponse = {
  /** The items in this page. */
  data: CostBucket[];
  /** Whether more items are available beyond this page. */
  hasMore: boolean;
  /** A cursor to fetch the next page. Null when there are no more results. */
  nextPage?: NextPage;
};

export const costResponseSchema: Schema<CostResponse> = s.object<CostResponse>({
  data: s.array(s.lazy(() => costBucketSchema)),
  hasMore: s.boolean(),
  nextPage: s.optional(s.lazy(() => nextPageSchema)),
  _keysMap: {
    hasMore: "has_more",
    nextPage: "next_page",
  },
});
