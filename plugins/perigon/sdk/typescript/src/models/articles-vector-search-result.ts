import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scoredDataArticleSchema, type ScoredDataArticle } from "./scored-data-article.js";

/** Articles vector search result */
export type ArticlesVectorSearchResult = {
  status: number;
  results: ScoredDataArticle[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const articlesVectorSearchResultSchema: Schema<ArticlesVectorSearchResult> =
  s.object<ArticlesVectorSearchResult>(
    {
      status: s.int(),
      results: s.array(s.lazy(() => scoredDataArticleSchema)),
    },
    { additionalProperties: s.json() },
  );
