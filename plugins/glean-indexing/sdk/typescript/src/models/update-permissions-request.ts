import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  documentPermissionsDefinitionSchema,
  type DocumentPermissionsDefinition,
} from "./document-permissions-definition.js";

/** Describes the request body of the /updatepermissions API call */
export type UpdatePermissionsRequest = {
  datasource: string;
  /**
   * The type of the document (Case, KnowledgeArticle for Salesforce for example). It cannot have
   * spaces or _
   */
  objectType?: string;
  /**
   * The datasource specific id for the document. This field is case insensitive and should not be
   * more than 200 characters in length.
   */
  id?: string;
  /**
   * The permalink for viewing the document. **Note: viewURL is a required field if id was not set
   * when uploading the document.**'
   */
  viewUrl?: string;
  /** describes the access control details of the document */
  permissions: DocumentPermissionsDefinition;
};

export const updatePermissionsRequestSchema: Schema<UpdatePermissionsRequest> =
  s.object<UpdatePermissionsRequest>({
    datasource: s.string(),
    objectType: s.optional(s.string()),
    id: s.optional(s.string()),
    viewUrl: s.optional(s.string()),
    permissions: documentPermissionsDefinitionSchema,
    _keysMap: {
      viewUrl: "viewURL",
    },
  });
