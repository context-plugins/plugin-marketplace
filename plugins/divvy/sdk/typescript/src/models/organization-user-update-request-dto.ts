import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Update a user (last name updated) */
export type OrganizationUserUpdateRequestDto = {
  /** User first name */
  firstName?: string;
  /** User last name */
  lastName?: string;
  /**
   * BILL-generated ID of the user role. The value begins with `0po`.
   *
   * If you do not set `roleId`, the default `ADMINISTRATOR` user role is assigned to the created
   * user. You can get the list of available user roles with `GET /v3/roles`.
   */
  roleId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const organizationUserUpdateRequestDtoProperties: s.Shape<OrganizationUserUpdateRequestDto> = {
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  roleId: s.optional(s.string()),
};

export const organizationUserUpdateRequestDtoInternalSchema: Schema<OrganizationUserUpdateRequestDto> =
  s.object<OrganizationUserUpdateRequestDto>(organizationUserUpdateRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const organizationUserUpdateRequestDtoSchema: Schema<OrganizationUserUpdateRequestDto> = s.lazySchema(
  () =>
    s.object<OrganizationUserUpdateRequestDto>(
      {
        ...organizationUserUpdateRequestDtoProperties,
        firstName: s.optional(s.string().check(s.maxLength(100))),
        lastName: s.optional(s.string().check(s.maxLength(100))),
      },
      { additionalProperties: s.json() },
    ),
);
