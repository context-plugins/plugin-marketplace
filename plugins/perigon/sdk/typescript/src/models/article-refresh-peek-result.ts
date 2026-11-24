import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { articleRefreshDataSchema, type ArticleRefreshData } from "./article-refresh-data.js";

export type ArticleRefreshPeekResult = {
  data?: ArticleRefreshData;
  fetchedAt?: Date | null;
  validatedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const articleRefreshPeekResultSchema: Schema<ArticleRefreshPeekResult> =
  s.object<ArticleRefreshPeekResult>(
    {
      data: s.optional(s.lazy(() => articleRefreshDataSchema)),
      fetchedAt: s.optionalNullable(s.dateTime()),
      validatedAt: s.optionalNullable(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
