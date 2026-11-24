import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { articleSummarySchema, type ArticleSummary } from "./article-summary.js";
import { paginationSchema, type Pagination } from "./pagination.js";

export type ApiV1ArticlesResponse1 = {
  articles: ArticleSummary[];
  pagination?: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ArticlesResponse1Schema: Schema<ApiV1ArticlesResponse1> = s.object<ApiV1ArticlesResponse1>(
  {
    articles: s.array(s.lazy(() => articleSummarySchema)),
    pagination: s.optional(s.lazy(() => paginationSchema)),
  },
  { additionalProperties: s.json() },
);
