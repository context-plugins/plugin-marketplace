import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { answerSchema, type Answer } from "./answer.js";
import { appResultSchema, type AppResult } from "./app-result.js";
import { chatMetadataSchema, type ChatMetadata } from "./chat-metadata.js";
import { codeSchema, type Code } from "./code.js";
import { collectionSchema, type Collection } from "./collection.js";
import { customEntitySchema, type CustomEntity } from "./custom-entity.js";
import { customerSchema, type Customer } from "./customer.js";
import { disambiguationSchema, type Disambiguation } from "./disambiguation.js";
import { documentSchema, type Document } from "./document.js";
import { extractedQnASchema, type ExtractedQnA } from "./extracted-qn-a.js";
import { generatedQnaSchema, type GeneratedQna } from "./generated-qna.js";
import { meetingSchema, type Meeting } from "./meeting.js";
import { personSchema, type Person } from "./person.js";
import { querySuggestionListSchema, type QuerySuggestionList } from "./query-suggestion-list.js";
import { relatedDocumentsSchema, type RelatedDocuments } from "./related-documents.js";
import { relatedQuestionSchema, type RelatedQuestion } from "./related-question.js";
import {
  searchResultProminenceEnumSchema,
  type SearchResultProminenceEnum,
} from "./search-result-prominence-enum.js";
import { searchResultSnippetSchema, type SearchResultSnippet } from "./search-result-snippet.js";
import { shortcutSchema, type Shortcut } from "./shortcut.js";
import { source3Schema, type Source3 } from "./source3.js";
import { teamSchema, type Team } from "./team.js";

/**
 * A single object that can support any object in the work graph. Only a single object will be
 * populated.
 */
export type StructuredResult = {
  document?: Document;
  person?: Person;
  customer?: Customer;
  team?: Team;
  customEntity?: CustomEntity;
  answer?: Answer;
  generatedQna?: GeneratedQna;
  extractedQnA?: ExtractedQnA;
  meeting?: Meeting;
  app?: AppResult;
  collection?: Collection;
  code?: Code;
  shortcut?: Shortcut;
  querySuggestions?: QuerySuggestionList;
  /**
   * Metadata of a Chat a user had with Glean Assistant. This contains no actual conversational
   * content.
   */
  chat?: ChatMetadata;
  /** A list of documents related to this structured result. */
  relatedDocuments?: RelatedDocuments[];
  relatedQuestion?: RelatedQuestion;
  /** A disambiguation between multiple entities with the same name */
  disambiguation?: Disambiguation;
  /** Any snippets associated to the populated object. */
  snippets?: SearchResultSnippet[];
  /**
   * An opaque token that represents this particular result in this particular query. To be used for
   * /feedback reporting.
   */
  trackingToken?: string;
  /** The level of visual distinction that should be given to a result. */
  prominence?: SearchResultProminenceEnum;
  /** Source context for this result. Possible values depend on the result type. */
  source?: Source3;
};

export const structuredResultSchema: Schema<StructuredResult> = s.object<StructuredResult>({
  document: s.optional(s.lazy(() => documentSchema)),
  person: s.optional(s.lazy(() => personSchema)),
  customer: s.optional(s.lazy(() => customerSchema)),
  team: s.optional(s.lazy(() => teamSchema)),
  customEntity: s.optional(s.lazy(() => customEntitySchema)),
  answer: s.optional(s.lazy(() => answerSchema)),
  generatedQna: s.optional(s.lazy(() => generatedQnaSchema)),
  extractedQnA: s.optional(s.lazy(() => extractedQnASchema)),
  meeting: s.optional(s.lazy(() => meetingSchema)),
  app: s.optional(s.lazy(() => appResultSchema)),
  collection: s.optional(s.lazy(() => collectionSchema)),
  code: s.optional(s.lazy(() => codeSchema)),
  shortcut: s.optional(s.lazy(() => shortcutSchema)),
  querySuggestions: s.optional(s.lazy(() => querySuggestionListSchema)),
  chat: s.optional(s.lazy(() => chatMetadataSchema)),
  relatedDocuments: s.optional(s.array(s.lazy(() => relatedDocumentsSchema))),
  relatedQuestion: s.optional(s.lazy(() => relatedQuestionSchema)),
  disambiguation: s.optional(s.lazy(() => disambiguationSchema)),
  snippets: s.optional(s.array(s.lazy(() => searchResultSnippetSchema))),
  trackingToken: s.optional(s.string()),
  prominence: s.optional(s.lazy(() => searchResultProminenceEnumSchema)),
  source: s.optional(s.lazy(() => source3Schema)),
});
