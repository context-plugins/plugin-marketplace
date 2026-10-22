import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clusterGroupSchema, type ClusterGroup } from "./cluster-group.js";
import { clusterTypeEnumSchema, type ClusterTypeEnum } from "./cluster-type-enum.js";
import { documentSchema, type Document } from "./document.js";
import { pinDocumentSchema, type PinDocument } from "./pin-document.js";
import { querySuggestionListSchema, type QuerySuggestionList } from "./query-suggestion-list.js";
import { querySuggestionSchema, type QuerySuggestion } from "./query-suggestion.js";
import { relatedDocumentsSchema, type RelatedDocuments } from "./related-documents.js";
import {
  searchResultProminenceEnumSchema,
  type SearchResultProminenceEnum,
} from "./search-result-prominence-enum.js";
import { searchResultSnippetSchema, type SearchResultSnippet } from "./search-result-snippet.js";
import { structuredResultSchema, type StructuredResult } from "./structured-result.js";

export type SearchResult = {
  /** An array of entities in the work graph retrieved via a data request. */
  structuredResults?: StructuredResult[];
  /**
   * An opaque token that represents this particular result in this particular query. To be used for
   * /feedback reporting.
   */
  trackingToken?: string;
  document?: Document;
  title?: string;
  url: string;
  /**
   * A deep link, if available, into the datasource's native application for the user's platform
   * (e.g. slack://...).
   */
  nativeAppUrl?: string;
  /** Text content from the result document which contains search query terms, if available. */
  snippets?: SearchResultSnippet[];
  /**
   * The full body text of the result if not already contained in the snippets. Only populated for
   * conversation results (e.g. results from a messaging app such as Slack).
   */
  fullText?: string;
  /**
   * The full body text of the result if not already contained in the snippets; each item in the
   * array represents a separate line in the original text. Only populated for conversation results
   * (e.g. results from a messaging app such as Slack).
   */
  fullTextList?: string[];
  /**
   * A list of results related to this search result. Eg. for conversation results it contains
   * individual messages from the conversation document which will be shown on SERP.
   */
  relatedResults?: RelatedDocuments[];
  /** A list of results that should be displayed as associated with this result. */
  clusteredResults?: SearchResult[];
  /** A list of results that should be displayed as associated with this result. */
  allClusteredResults?: ClusterGroup[];
  /** The total number of attachments. */
  attachmentCount?: number;
  /**
   * A (potentially partial) list of results representing documents attached to the main result
   * document.
   */
  attachments?: SearchResult[];
  /**
   * A list of results that should be displayed as backlinks of this result in reverse chronological
   * order.
   */
  backlinkResults?: SearchResult[];
  /** The reason for inclusion of clusteredResults. */
  clusterType?: ClusterTypeEnum;
  mustIncludeSuggestions?: QuerySuggestionList;
  querySuggestion?: QuerySuggestion;
  /** The level of visual distinction that should be given to a result. */
  prominence?: SearchResultProminenceEnum;
  /**
   * Additional context for the relationship between the result and the document it's attached to.
   */
  attachmentContext?: string;
  /** A list of pins associated with this search result. */
  pins?: PinDocument[];
};

export const searchResultSchema: Schema<SearchResult> = s.object<SearchResult>({
  structuredResults: s.optional(s.array(s.lazy(() => structuredResultSchema))),
  trackingToken: s.optional(s.string()),
  document: s.optional(s.lazy(() => documentSchema)),
  title: s.optional(s.string()),
  url: s.string(),
  nativeAppUrl: s.optional(s.string()),
  snippets: s.optional(s.array(s.lazy(() => searchResultSnippetSchema))),
  fullText: s.optional(s.string()),
  fullTextList: s.optional(s.array(s.string())),
  relatedResults: s.optional(s.array(s.lazy(() => relatedDocumentsSchema))),
  clusteredResults: s.optional(s.array(s.lazy(() => searchResultSchema))),
  allClusteredResults: s.optional(s.array(s.lazy(() => clusterGroupSchema))),
  attachmentCount: s.optional(s.int()),
  attachments: s.optional(s.array(s.lazy(() => searchResultSchema))),
  backlinkResults: s.optional(s.array(s.lazy(() => searchResultSchema))),
  clusterType: s.optional(s.lazy(() => clusterTypeEnumSchema)),
  mustIncludeSuggestions: s.optional(s.lazy(() => querySuggestionListSchema)),
  querySuggestion: s.optional(s.lazy(() => querySuggestionSchema)),
  prominence: s.optional(s.lazy(() => searchResultProminenceEnumSchema)),
  attachmentContext: s.optional(s.string()),
  pins: s.optional(s.array(s.lazy(() => pinDocumentSchema))),
});
