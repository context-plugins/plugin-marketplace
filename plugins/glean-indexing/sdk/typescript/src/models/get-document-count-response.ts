import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes the response body of the /getdocumentcount API call */
export type GetDocumentCountResponse = {
  /** Number of documents corresponding to the specified custom datasource. */
  documentCount?: number;
};

export const getDocumentCountResponseSchema: Schema<GetDocumentCountResponse> =
  s.object<GetDocumentCountResponse>({
    documentCount: s.optional(s.int()),
  });
