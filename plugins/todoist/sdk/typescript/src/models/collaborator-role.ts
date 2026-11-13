import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * User role in the project. For personal project the role should be always "CREATOR" User role for
 * projects v1 maybe specified as "CREATOR" or "ADMIN", because in the past there was no
 * permissions.
 */
export const CollaboratorRole = {
  Creator: "CREATOR",
  Admin: "ADMIN",
  ReadWrite: "READ_WRITE",
  EditOnly: "EDIT_ONLY",
  CompleteOnly: "COMPLETE_ONLY",
} as const;
export type CollaboratorRole = (typeof CollaboratorRole)[keyof typeof CollaboratorRole] | (string & {});

export const collaboratorRoleSchema: EnumSchema<CollaboratorRole> =
  s.enumOf<CollaboratorRole>(CollaboratorRole);
