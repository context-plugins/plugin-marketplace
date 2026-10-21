import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { documentOrError1Schema, type DocumentOrError1 } from "./unions/document-or-error1.js";

export type GetDocumentsResponse = {
  /** The document details or the error if document is not found. */
  documents?: Record<string, DocumentOrError1>;
};

export const getDocumentsResponseSchema: Schema<GetDocumentsResponse> = s.object<GetDocumentsResponse>({
  documents: s.optional(
    s.record(
      s.string(),
      s.lazy(() => documentOrError1Schema),
    ),
  ),
});
