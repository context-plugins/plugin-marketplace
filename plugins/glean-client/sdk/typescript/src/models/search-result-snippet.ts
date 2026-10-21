import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { textRangeSchema, type TextRange } from "./text-range.js";

export type SearchResultSnippet = {
  /** The mime type of the snippets, currently either text/plain or text/html. */
  mimeType?: string;
  /** A matching snippet from the document with no highlights. */
  text?: string;
  /** Used for sorting based off the snippet's location within all_snippetable_text */
  snippetTextOrdering?: number;
  /** The bolded ranges within text. */
  ranges?: TextRange[];
  /**
   * A URL, generated based on availability, that links to the position of the snippet text or to
   * the nearest header above the snippet text.
   */
  url?: string;
  /**
   * A matching snippet from the document. Query term matches are marked by the unicode characters
   * uE006 and uE007. Use 'text' field instead.
   *
   * @deprecated
   */
  snippet?: string;
};

export const searchResultSnippetSchema: Schema<SearchResultSnippet> = s.object<SearchResultSnippet>({
  mimeType: s.optional(s.string()),
  text: s.optional(s.string()),
  snippetTextOrdering: s.optional(s.int()),
  ranges: s.optional(s.array(s.lazy(() => textRangeSchema))),
  url: s.optional(s.string()),
  snippet: s.optional(s.string()),
});
