import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentDefinitionSchema, type DocumentDefinition } from "./document-definition.js";

/** Describes the request body of the /indexdocuments API call */
export type IndexDocumentsRequest = {
  /** Optional id parameter to identify and track a batch of documents. */
  uploadId?: string;
  /** Datasource of the documents */
  datasource: string;
  /** Batch of documents being added/updated */
  documents: DocumentDefinition[];
};

export const indexDocumentsRequestSchema: Schema<IndexDocumentsRequest> = s.object<IndexDocumentsRequest>({
  uploadId: s.optional(s.string()),
  datasource: s.string(),
  documents: s.array(s.lazy(() => documentDefinitionSchema)),
});
