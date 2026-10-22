import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  permissionsGroupIntersectionDefinitionSchema,
  type PermissionsGroupIntersectionDefinition,
} from "./permissions-group-intersection-definition.js";
import { userReferenceDefinitionSchema, type UserReferenceDefinition } from "./user-reference-definition.js";

/** describes the access control details of the document */
export type DocumentPermissionsDefinition = {
  /** List of users who can view the document */
  allowedUsers?: UserReferenceDefinition[];
  /** List of groups that can view the document */
  allowedGroups?: string[];
  /**
   * List of allowed group intersections. This describes a permissions constraint of the form
   * ((GroupA AND GroupB AND GroupC) OR (GroupX AND GroupY) OR ...
   */
  allowedGroupIntersections?: PermissionsGroupIntersectionDefinition[];
  /** If true, then any Glean user can view the document */
  allowAnonymousAccess?: boolean;
  /** If true, then any user who has an account in the datasource can view the document. */
  allowAllDatasourceUsersAccess?: boolean;
};

export const documentPermissionsDefinitionSchema: Schema<DocumentPermissionsDefinition> =
  s.object<DocumentPermissionsDefinition>({
    allowedUsers: s.optional(s.array(s.lazy(() => userReferenceDefinitionSchema))),
    allowedGroups: s.optional(s.array(s.string())),
    allowedGroupIntersections: s.optional(
      s.array(s.lazy(() => permissionsGroupIntersectionDefinitionSchema)),
    ),
    allowAnonymousAccess: s.optional(s.boolean()),
    allowAllDatasourceUsersAccess: s.optional(s.boolean()),
  });
