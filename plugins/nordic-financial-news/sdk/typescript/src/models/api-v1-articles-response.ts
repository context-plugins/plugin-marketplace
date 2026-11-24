import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { articleDetailSchema, type ArticleDetail } from "./article-detail.js";

export type ApiV1ArticlesResponse = {
  article?: ArticleDetail;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ArticlesResponseSchema: Schema<ApiV1ArticlesResponse> = s.object<ApiV1ArticlesResponse>(
  {
    article: s.optional(s.lazy(() => articleDetailSchema)),
  },
  { additionalProperties: s.json() },
);
