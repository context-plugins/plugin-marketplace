import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  articleRefreshPeekResultSchema,
  type ArticleRefreshPeekResult,
} from "./article-refresh-peek-result.js";

export type ArticleRefreshPeekResponse = {
  results?: ArticleRefreshPeekResult[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const articleRefreshPeekResponseSchema: Schema<ArticleRefreshPeekResponse> =
  s.object<ArticleRefreshPeekResponse>(
    {
      results: s.optionalNullable(s.array(s.lazy(() => articleRefreshPeekResultSchema))),
    },
    { additionalProperties: s.json() },
  );
