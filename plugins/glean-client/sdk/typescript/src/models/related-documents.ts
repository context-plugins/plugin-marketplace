import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentSchema, type Document } from "./document.js";
import { querySuggestionSchema, type QuerySuggestion } from "./query-suggestion.js";
import { relationSchema, type Relation } from "./relation.js";
import { searchResultSchema, type SearchResult } from "./search-result.js";

export type RelatedDocuments = {
  /** How this document relates to the including entity. */
  relation?: Relation;
  /**
   * Which entity in the response that this entity relates to. Relevant when there are multiple
   * entities associated with the response (such as merged customers)
   */
  associatedEntityId?: string;
  querySuggestion?: QuerySuggestion;
  /**
   * A truncated list of documents with this relation. TO BE DEPRECATED.
   *
   * @deprecated
   */
  documents?: Document[];
  /**
   * A truncated list of documents associated with this relation. To be used in favor of `documents`
   * because it contains a trackingToken.
   */
  results?: SearchResult[];
};

export const relatedDocumentsSchema: Schema<RelatedDocuments> = s.object<RelatedDocuments>({
  relation: s.optional(s.lazy(() => relationSchema)),
  associatedEntityId: s.optional(s.string()),
  querySuggestion: s.optional(s.lazy(() => querySuggestionSchema)),
  documents: s.optional(s.array(s.lazy(() => documentSchema))),
  results: s.optional(s.array(s.lazy(() => searchResultSchema))),
});
