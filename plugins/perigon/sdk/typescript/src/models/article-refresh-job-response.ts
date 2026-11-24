import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  articleRefreshJobArticleResultSchema,
  type ArticleRefreshJobArticleResult,
} from "./article-refresh-job-article-result.js";
import {
  status1PerigonNewsStoriesApiSchema,
  type Status1PerigonNewsStoriesApi,
} from "./status1-perigon-news-stories-api.js";

export type ArticleRefreshJobResponse = {
  jobId?: string | null;
  status?: Status1PerigonNewsStoriesApi | null;
  results?: ArticleRefreshJobArticleResult[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const articleRefreshJobResponseSchema: Schema<ArticleRefreshJobResponse> =
  s.object<ArticleRefreshJobResponse>(
    {
      jobId: s.optionalNullable(s.string()),
      status: s.optionalNullable(s.lazy(() => status1PerigonNewsStoriesApiSchema)),
      results: s.optionalNullable(s.array(s.lazy(() => articleRefreshJobArticleResultSchema))),
    },
    { additionalProperties: s.json() },
  );
