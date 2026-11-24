import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { articleRefreshDataSchema, type ArticleRefreshData } from "./article-refresh-data.js";
import {
  statusPerigonNewsStoriesApiSchema,
  type StatusPerigonNewsStoriesApi,
} from "./status-perigon-news-stories-api.js";

export type ArticleRefreshJobArticleResult = {
  articleId?: string | null;
  status?: StatusPerigonNewsStoriesApi | null;
  data?: ArticleRefreshData;
  computedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const articleRefreshJobArticleResultSchema: Schema<ArticleRefreshJobArticleResult> =
  s.object<ArticleRefreshJobArticleResult>(
    {
      articleId: s.optionalNullable(s.string()),
      status: s.optionalNullable(s.lazy(() => statusPerigonNewsStoriesApiSchema)),
      data: s.optional(s.lazy(() => articleRefreshDataSchema)),
      computedAt: s.optionalNullable(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
