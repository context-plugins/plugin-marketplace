import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paginationSchema, type Pagination } from "./pagination.js";
import { storySummarySchema, type StorySummary } from "./story-summary.js";

export type ApiV1CompaniesStoriesResponse = {
  stories: StorySummary[];
  pagination?: Pagination;
  /**
   * Present and `true` when your plan restricted what this endpoint can return, so the result may
   * be incomplete. Absent when your plan applies no restriction.
   */
  planLimited?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CompaniesStoriesResponseSchema: Schema<ApiV1CompaniesStoriesResponse> =
  s.object<ApiV1CompaniesStoriesResponse>(
    {
      stories: s.array(s.lazy(() => storySummarySchema)),
      pagination: s.optional(s.lazy(() => paginationSchema)),
      planLimited: s.optional(s.boolean()),
      _keysMap: {
        planLimited: "plan_limited",
      },
    },
    { additionalProperties: s.json() },
  );
