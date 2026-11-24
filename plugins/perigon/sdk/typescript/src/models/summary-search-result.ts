import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { articleSchema, type Article } from "./article.js";

export type SummarySearchResult = {
  /** HTTP status code for the response. */
  status: number;
  /** Number of articles returned in results after applying returnedArticleCount. */
  numResults: number;
  /** Generated summary of the selected articles, or 'No articles found' when no content matches. */
  summary: string;
  /** Articles returned after summary generation, limited by returnedArticleCount. */
  results: Article[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const summarySearchResultSchema: Schema<SummarySearchResult> = s.object<SummarySearchResult>(
  {
    status: s.int(),
    numResults: s.int(),
    summary: s.string(),
    results: s.array(s.lazy(() => articleSchema)),
  },
  { additionalProperties: s.json() },
);
