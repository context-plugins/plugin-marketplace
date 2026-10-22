import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { searchResultSnippetSchema, type SearchResultSnippet } from "./search-result-snippet.js";
import { textRangeSchema, type TextRange } from "./text-range.js";

/**
 * Each text range from the response can correspond to an array of snippets from the citation
 * source.
 */
export type ReferenceRange = {
  /** A subsection of a given string to which some special formatting should be applied. */
  textRange?: TextRange;
  snippets?: SearchResultSnippet[];
};

export const referenceRangeSchema: Schema<ReferenceRange> = s.object<ReferenceRange>({
  textRange: s.optional(s.lazy(() => textRangeSchema)),
  snippets: s.optional(s.array(s.lazy(() => searchResultSnippetSchema))),
});
