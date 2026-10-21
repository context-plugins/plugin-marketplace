import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  documentPermissionsDefinitionSchema,
  type DocumentPermissionsDefinition,
} from "./document-permissions-definition.js";
import { documentStatusResponseSchema, type DocumentStatusResponse } from "./document-status-response.js";

/** Describes the response body of the /debug/{datasource}/document API call */
export type DebugDocumentResponse = {
  /** Describes the document status response body */
  status?: DocumentStatusResponse;
  /** describes the access control details of the document */
  uploadedPermissions?: DocumentPermissionsDefinition;
};

export const debugDocumentResponseSchema: Schema<DebugDocumentResponse> = s.object<DebugDocumentResponse>({
  status: s.optional(s.lazy(() => documentStatusResponseSchema)),
  uploadedPermissions: s.optional(s.lazy(() => documentPermissionsDefinitionSchema)),
});
