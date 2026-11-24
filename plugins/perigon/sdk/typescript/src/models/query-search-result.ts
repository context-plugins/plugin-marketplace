import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { articleSchema, type Article } from "./article.js";

export type QuerySearchResult = {
  status: number;
  numResults: number;
  articles: Article[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const querySearchResultSchema: Schema<QuerySearchResult> = s.object<QuerySearchResult>(
  {
    status: s.int(),
    numResults: s.int(),
    articles: s.array(s.lazy(() => articleSchema)),
  },
  { additionalProperties: s.json() },
);
