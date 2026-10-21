import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes the request body for /getdocumentstatus API call */
export type GetDocumentStatusRequest = {
  /** Datasource to get fetch document status for */
  datasource: string;
  /** Object type of the document to get the status for */
  objectType: string;
  /** Glean Document ID within the datasource to get the status for. */
  docId: string;
};

export const getDocumentStatusRequestSchema: Schema<GetDocumentStatusRequest> =
  s.object<GetDocumentStatusRequest>({
    datasource: s.string(),
    objectType: s.string(),
    docId: s.string(),
  });
