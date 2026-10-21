import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentDefinitionSchema, type DocumentDefinition } from "./document-definition.js";

/** Describes the request body of the /indexdocument API call */
export type IndexDocumentRequest = {
  /**
   * Version number for document for optimistic concurrency control. If absent or 0 then no version
   * checks are done.
   */
  version?: number;
  /** Indexable document structure */
  document: DocumentDefinition;
};

export const indexDocumentRequestSchema: Schema<IndexDocumentRequest> = s.object<IndexDocumentRequest>({
  version: s.optional(s.int()),
  document: documentDefinitionSchema,
});
