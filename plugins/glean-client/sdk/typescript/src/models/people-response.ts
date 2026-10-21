import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { personSchema, type Person } from "./person.js";
import { relatedDocumentsSchema, type RelatedDocuments } from "./related-documents.js";

export type PeopleResponse = {
  /** A Person for each ID in the request, each with PersonMetadata populated. */
  results?: Person[];
  /**
   * A list of documents related to this people response. This is only included if DOCUMENT_ACTIVITY
   * is requested and only 1 person is included in the request.
   */
  relatedDocuments?: RelatedDocuments[];
  /** A list of IDs that could not be found. */
  errors?: string[];
};

export const peopleResponseSchema: Schema<PeopleResponse> = s.object<PeopleResponse>({
  results: s.optional(s.array(s.lazy(() => personSchema))),
  relatedDocuments: s.optional(s.array(s.lazy(() => relatedDocumentsSchema))),
  errors: s.optional(s.array(s.string())),
});
