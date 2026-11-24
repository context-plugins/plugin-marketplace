import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { articleSummarySchema, type ArticleSummary } from "./article-summary.js";
import { paginationSchema, type Pagination } from "./pagination.js";

export type ApiV1CompaniesArticlesResponse = {
  articles: ArticleSummary[];
  pagination?: Pagination;
  /**
   * Present and `true` when your plan restricted what this endpoint can return, so the result may
   * be incomplete. Absent when your plan applies no restriction.
   */
  planLimited?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CompaniesArticlesResponseSchema: Schema<ApiV1CompaniesArticlesResponse> =
  s.object<ApiV1CompaniesArticlesResponse>(
    {
      articles: s.array(s.lazy(() => articleSummarySchema)),
      pagination: s.optional(s.lazy(() => paginationSchema)),
      planLimited: s.optional(s.boolean()),
      _keysMap: {
        planLimited: "plan_limited",
      },
    },
    { additionalProperties: s.json() },
  );
