import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { debugDocumentRequestSchema, type DebugDocumentRequest } from "./debug-document-request.js";

/** Describes the request body of the /debug/{datasource}/documents API call. */
export type DebugDocumentsRequest = {
  /** Documents to fetch debug information for */
  debugDocuments: DebugDocumentRequest[];
};

export const debugDocumentsRequestSchema: Schema<DebugDocumentsRequest> = s.object<DebugDocumentsRequest>({
  debugDocuments: s.array(s.lazy(() => debugDocumentRequestSchema)),
});
