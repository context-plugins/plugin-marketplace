import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentSchema, type Document } from "./document.js";

export type GetDocumentsByFacetsResponse = {
  /** The document details, ordered by score. */
  documents?: Document[];
  /** Whether more results are available. Use cursor to retrieve them. */
  hasMoreResults?: boolean;
  /**
   * Cursor that indicates the start of the next page of results. To be passed in "more" requests
   * for this query.
   */
  cursor?: string;
};

export const getDocumentsByFacetsResponseSchema: Schema<GetDocumentsByFacetsResponse> =
  s.object<GetDocumentsByFacetsResponse>({
    documents: s.optional(s.array(s.lazy(() => documentSchema))),
    hasMoreResults: s.optional(s.boolean()),
    cursor: s.optional(s.string()),
  });
