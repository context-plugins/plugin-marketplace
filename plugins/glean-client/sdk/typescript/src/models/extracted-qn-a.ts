import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { searchResultSchema, type SearchResult } from "./search-result.js";

export type ExtractedQnA = {
  /** Heading text that was matched to produce this result. */
  heading?: string;
  /** Question text that was matched to produce this result. */
  question?: string;
  questionResult?: SearchResult;
};

export const extractedQnASchema: Schema<ExtractedQnA> = s.object<ExtractedQnA>({
  heading: s.optional(s.string()),
  question: s.optional(s.string()),
  questionResult: s.optional(s.lazy(() => searchResultSchema)),
});
