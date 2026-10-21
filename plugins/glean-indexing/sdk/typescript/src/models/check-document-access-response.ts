import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes the response body of the /checkdocumentaccess API call */
export type CheckDocumentAccessResponse = {
  /** If true, user has access to document for search */
  hasAccess?: boolean;
};

export const checkDocumentAccessResponseSchema: Schema<CheckDocumentAccessResponse> =
  s.object<CheckDocumentAccessResponse>({
    hasAccess: s.optional(s.boolean()),
  });
