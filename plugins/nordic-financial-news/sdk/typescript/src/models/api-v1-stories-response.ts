import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paginationSchema, type Pagination } from "./pagination.js";
import {
  storySummaryNordicFinancialNewsStoriesApiSchema,
  type StorySummaryNordicFinancialNewsStoriesApi,
} from "./story-summary-nordic-financial-news-stories-api.js";

export type ApiV1StoriesResponse = {
  stories?: StorySummaryNordicFinancialNewsStoriesApi[];
  pagination?: Pagination;
  /**
   * Present and `true` when your plan restricted what this endpoint can return, so the result may
   * be incomplete. Absent when your plan applies no restriction.
   */
  planLimited?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1StoriesResponseSchema: Schema<ApiV1StoriesResponse> = s.object<ApiV1StoriesResponse>(
  {
    stories: s.optional(s.array(s.lazy(() => storySummaryNordicFinancialNewsStoriesApiSchema))),
    pagination: s.optional(s.lazy(() => paginationSchema)),
    planLimited: s.optional(s.boolean()),
    _keysMap: {
      planLimited: "plan_limited",
    },
  },
  { additionalProperties: s.json() },
);
