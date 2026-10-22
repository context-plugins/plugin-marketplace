import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { debugDocumentResponseSchema, type DebugDocumentResponse } from "./debug-document-response.js";

/**
 * Describes the response body of a single document in the /debug/{datasource}/documents API call
 */
export type DebugDocumentsResponseItem = {
  /** Id of the document */
  docId?: string;
  /** objectType of the document */
  objectType?: string;
  /** Describes the response body of the /debug/{datasource}/document API call */
  debugInfo?: DebugDocumentResponse;
};

export const debugDocumentsResponseItemSchema: Schema<DebugDocumentsResponseItem> =
  s.object<DebugDocumentsResponseItem>({
    docId: s.optional(s.string()),
    objectType: s.optional(s.string()),
    debugInfo: s.optional(s.lazy(() => debugDocumentResponseSchema)),
  });
