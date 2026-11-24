import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { roleSchema, type Role } from "./role.js";

/** Users response. */
export type OrganizationUserResponseDto = {
  /** BILL-generated ID of the user. The value begins with `006`. */
  id?: string;
  /** Set as `true` if the user is archived */
  archived?: boolean;
  /** User first name */
  firstName?: string;
  /** User last name */
  lastName?: string;
  /** User email address */
  email?: string;
  role?: Role;
  /** Created date and time */
  createdTime?: Date;
  /** Updated date and time */
  updatedTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const organizationUserResponseDtoSchema: Schema<OrganizationUserResponseDto> =
  s.object<OrganizationUserResponseDto>(
    {
      id: s.optional(s.string()),
      archived: s.optional(s.boolean()),
      firstName: s.optional(s.string()),
      lastName: s.optional(s.string()),
      email: s.optional(s.string()),
      role: s.optional(s.lazy(() => roleSchema)),
      createdTime: s.optional(s.dateTime()),
      updatedTime: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
