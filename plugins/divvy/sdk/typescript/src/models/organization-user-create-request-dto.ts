import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Create a user */
export type OrganizationUserCreateRequestDto = {
  /** User first name */
  firstName: string;
  /** User last name */
  lastName: string;
  /** User email address */
  email: string;
  /**
   * BILL-generated ID of the user role. The value begins with `0po`.
   *
   * If you do not set `roleId`, the default `ADMINISTRATOR` user role is assigned to the created
   * user. You can get the list of available user roles with `GET /v3/roles`.
   */
  roleId: string;
  /** Set as `true` if the user accepts the BILL terms of service */
  acceptTermsOfService: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const organizationUserCreateRequestDtoProperties: s.Shape<OrganizationUserCreateRequestDto> = {
  firstName: s.string(),
  lastName: s.string(),
  email: s.string(),
  roleId: s.string(),
  acceptTermsOfService: s.boolean(),
};

export const organizationUserCreateRequestDtoInternalSchema: Schema<OrganizationUserCreateRequestDto> =
  s.object<OrganizationUserCreateRequestDto>(organizationUserCreateRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const organizationUserCreateRequestDtoSchema: Schema<OrganizationUserCreateRequestDto> = s.lazySchema(
  () =>
    s.object<OrganizationUserCreateRequestDto>(
      {
        ...organizationUserCreateRequestDtoProperties,
        firstName: s.string().check(s.minLength(1), s.maxLength(100)),
        lastName: s.string().check(s.minLength(1), s.maxLength(100)),
        email: s.string().check(s.minLength(1)),
        roleId: s.string().check(s.minLength(1)),
      },
      { additionalProperties: s.json() },
    ),
);
