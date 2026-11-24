import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { articleSchema, type Article } from "./article.js";
import { vectorDataSchema, type VectorData } from "./vector-data.js";

export type ScoredDataArticle = {
  score?: number | null;
  data?: Article;
  vectors?: VectorData[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scoredDataArticleSchema: Schema<ScoredDataArticle> = s.object<ScoredDataArticle>(
  {
    score: s.optionalNullable(s.float64()),
    data: s.optional(s.lazy(() => articleSchema)),
    vectors: s.optionalNullable(s.array(s.lazy(() => vectorDataSchema))),
  },
  { additionalProperties: s.json() },
);
