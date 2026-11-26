import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  organizationUserRoleTypeSchema,
  type OrganizationUserRoleType,
} from "./organization-user-role-type.js";

/** User roles response. */
export type RoleResponseDto = {
  /** BILL-generated ID of the user role. The value begins with `0po`. */
  id?: string;
  type?: OrganizationUserRoleType;
  /** User role description */
  description?: string;
  /** Created date and time */
  createdTime?: Date;
  /** Updated date and time */
  updatedTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const roleResponseDtoSchema: Schema<RoleResponseDto> = s.object<RoleResponseDto>(
  {
    id: s.optional(s.string()),
    type: s.optional(s.lazy(() => organizationUserRoleTypeSchema)),
    description: s.optional(s.string()),
    createdTime: s.optional(s.dateTime()),
    updatedTime: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
