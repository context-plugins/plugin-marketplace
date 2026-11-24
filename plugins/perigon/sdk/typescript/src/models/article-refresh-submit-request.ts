import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ArticleRefreshSubmitRequest = {
  articleIds: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const articleRefreshSubmitRequestProperties: s.Shape<ArticleRefreshSubmitRequest> = {
  articleIds: s.array(s.string()),
};

export const articleRefreshSubmitRequestInternalSchema: Schema<ArticleRefreshSubmitRequest> =
  s.object<ArticleRefreshSubmitRequest>(articleRefreshSubmitRequestProperties, {
    additionalProperties: s.json(),
  });

export const articleRefreshSubmitRequestSchema: Schema<ArticleRefreshSubmitRequest> = s.lazySchema(() =>
  s.object<ArticleRefreshSubmitRequest>(
    {
      ...articleRefreshSubmitRequestProperties,
      articleIds: s.array(s.string()).check(s.minLength(0), s.maxLength(100)),
    },
    { additionalProperties: s.json() },
  ),
);
