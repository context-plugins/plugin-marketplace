import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { permissionSet2Schema, type PermissionSet2 } from "./permission-set2.js";
import { roleAssigneeTypeSchema, type RoleAssigneeType } from "./role-assignee-type.js";
import { Type2, type2Schema } from "./type2.js";

export type Role = {
  /** Always `role`. @default Type2.Role */
  type?: Type2;
  /** The unique ID for the role. */
  id: string;
  /** The human-readable name of the role. */
  name: string;
  /** The unique, human-readable identifier for the role. */
  slug: string;
  /** A description of the access this role grants. */
  description: string;
  /** The permissions granted by this role. */
  permissions: PermissionSet2;
  /** The types of resource this role can be assigned to. */
  assignableTo: RoleAssigneeType[];
  /** The slugs of the roles this role is an add-on of. Empty when this role is not an add-on. */
  appliesTo: string[];
  /** Whether this role can be assigned on its own, without being combined with another role. */
  isStandaloneAssignable: boolean;
};

export const roleSchema: Schema<Role> = s.object<Role>({
  type: s.defaulted(type2Schema, Type2.Role),
  id: s.string(),
  name: s.string(),
  slug: s.string(),
  description: s.string(),
  permissions: permissionSet2Schema,
  assignableTo: s.array(s.lazy(() => roleAssigneeTypeSchema)),
  appliesTo: s.array(s.string()),
  isStandaloneAssignable: s.boolean(),
  _keysMap: {
    assignableTo: "assignable_to",
    appliesTo: "applies_to",
    isStandaloneAssignable: "is_standalone_assignable",
  },
});
