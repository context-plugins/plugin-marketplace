import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes the request body of the /deletedocument API call */
export type DeleteDocumentRequest = {
  /**
   * Version number for document for optimistic concurrency control. If absent or 0 then no version
   * checks are done.
   */
  version?: number;
  /** datasource of the document */
  datasource: string;
  /** object type of the document */
  objectType: string;
  /** The id of the document */
  id: string;
};

export const deleteDocumentRequestSchema: Schema<DeleteDocumentRequest> = s.object<DeleteDocumentRequest>({
  version: s.optional(s.int()),
  datasource: s.string(),
  objectType: s.string(),
  id: s.string(),
});
