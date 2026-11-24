import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { docSlimSchema, type DocSlim } from "./doc-slim.js";

/** The results of the Document search query. */
export type DocSearchResults = {
  /**
   * The total number of matches for the search query. The first 1000 matches can be paged through
   * via the API.
   */
  total: number;
  /** A list of document search results. */
  data: DocSlim[];
  /** The URL path and query string for the next page of search results. */
  next: string | null;
};

export const docSearchResultsSchema: Schema<DocSearchResults> = s.object<DocSearchResults>({
  total: s.int(),
  data: s.array(s.lazy(() => docSlimSchema)),
  next: s.nullable(s.string()),
});
