import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentDefinitionSchema, type DocumentDefinition } from "./document-definition.js";

/** Describes the request body of the /bulkindexdocuments API call */
export type BulkIndexDocumentsRequest = {
  /** Unique id that must be used for this bulk upload instance */
  uploadId: string;
  /** true if this is the first page of the upload. Defaults to false */
  isFirstPage?: boolean;
  /** true if this is the last page of the upload. Defaults to false */
  isLastPage?: boolean;
  /**
   * Flag to discard previous upload attempts and start from scratch. Must be specified with
   * isFirstPage=true
   */
  forceRestartUpload?: boolean;
  /** Datasource of the documents */
  datasource: string;
  /** Batch of documents for the datasource */
  documents: DocumentDefinition[];
  /**
   * True if older documents need to be force deleted after the upload completes. Defaults to older
   * documents being deleted asynchronously. This must only be set when `isLastPage = true`
   */
  disableStaleDocumentDeletionCheck?: boolean;
};

export const bulkIndexDocumentsRequestSchema: Schema<BulkIndexDocumentsRequest> =
  s.object<BulkIndexDocumentsRequest>({
    uploadId: s.string(),
    isFirstPage: s.optional(s.boolean()),
    isLastPage: s.optional(s.boolean()),
    forceRestartUpload: s.optional(s.boolean()),
    datasource: s.string(),
    documents: s.array(s.lazy(() => documentDefinitionSchema)),
    disableStaleDocumentDeletionCheck: s.optional(s.boolean()),
  });
