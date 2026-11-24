import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  organizationUserRoleTypeSchema,
  type OrganizationUserRoleType,
} from "./organization-user-role-type.js";

export type Role = {
  /** BILL-generated ID of the user role. The value begins with `0po`. */
  id?: string;
  type?: OrganizationUserRoleType;
  /** User role description */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const roleSchema: Schema<Role> = s.object<Role>(
  {
    id: s.optional(s.string()),
    type: s.optional(s.lazy(() => organizationUserRoleTypeSchema)),
    description: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
