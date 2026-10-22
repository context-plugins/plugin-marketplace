import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes the request body of the /checkdocumentaccess API call */
export type CheckDocumentAccessRequest = {
  /** Datasource of document to check access for. */
  datasource: string;
  /** Object type of document to check access for. */
  objectType: string;
  /** Glean Document ID to check access for. */
  docId: string;
  /** Email of user to check access for. */
  userEmail: string;
};

export const checkDocumentAccessRequestSchema: Schema<CheckDocumentAccessRequest> =
  s.object<CheckDocumentAccessRequest>({
    datasource: s.string(),
    objectType: s.string(),
    docId: s.string(),
    userEmail: s.string(),
  });
