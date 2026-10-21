import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { includeFieldSchema, type IncludeField } from "./include-field.js";
import { documentSpec4Schema, type DocumentSpec4 } from "./unions/document-spec4.js";

export type GetDocumentsRequest = {
  /** The specification for the documents to be retrieved. */
  documentSpecs: DocumentSpec4[];
  /** List of Document fields to return (that aren't returned by default) */
  includeFields?: IncludeField[];
};

export const getDocumentsRequestSchema: Schema<GetDocumentsRequest> = s.object<GetDocumentsRequest>({
  documentSpecs: s.array(s.lazy(() => documentSpec4Schema)),
  includeFields: s.optional(s.array(s.lazy(() => includeFieldSchema))),
});
