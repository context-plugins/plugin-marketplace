import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  richNewsArticleInternalSchema,
  richNewsArticleSchema,
  type RichNewsArticle,
} from "./rich-news-article.js";

export type ApiNewsRelatedResponse = {
  results: RichNewsArticle[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiNewsRelatedResponseProperties: s.Shape<ApiNewsRelatedResponse> = {
  results: s.array(s.lazy(() => richNewsArticleInternalSchema)),
};

export const apiNewsRelatedResponseInternalSchema: Schema<ApiNewsRelatedResponse> =
  s.object<ApiNewsRelatedResponse>(apiNewsRelatedResponseProperties, { additionalProperties: s.json() });

export const apiNewsRelatedResponseSchema: Schema<ApiNewsRelatedResponse> = s.lazySchema(() =>
  s.object<ApiNewsRelatedResponse>(
    {
      ...apiNewsRelatedResponseProperties,
      results: s.array(s.lazy(() => richNewsArticleSchema)).check(s.maxLength(6)),
    },
    { additionalProperties: s.json() },
  ),
);
