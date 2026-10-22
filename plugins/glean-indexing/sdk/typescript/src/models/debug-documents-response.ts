import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  debugDocumentsResponseItemSchema,
  type DebugDocumentsResponseItem,
} from "./debug-documents-response-item.js";

/**
 * Describes the response body of a single document in the /debug/{datasource}/documents API call
 */
export type DebugDocumentsResponse = {
  /** List of document ids/urls and their debug information */
  documentStatuses?: DebugDocumentsResponseItem[];
};

export const debugDocumentsResponseSchema: Schema<DebugDocumentsResponse> = s.object<DebugDocumentsResponse>({
  documentStatuses: s.optional(s.array(s.lazy(() => debugDocumentsResponseItemSchema))),
});
