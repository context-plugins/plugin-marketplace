import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes the request body of the /debug/{datasource}/document API call. */
export type DebugDocumentRequest = {
  /** Object type of the document to get the status for. */
  objectType: string;
  /** Glean Document ID within the datasource to get the status for. */
  docId: string;
};

export const debugDocumentRequestSchema: Schema<DebugDocumentRequest> = s.object<DebugDocumentRequest>({
  objectType: s.string(),
  docId: s.string(),
});
