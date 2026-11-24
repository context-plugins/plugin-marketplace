import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Create a user */
export type PartnerUserCreateRequestDto = {
  /** User first name */
  firstName: string;
  /** User last name */
  lastName?: string;
  /** User email address */
  email: string;
  /**
   * BILL-generated ID of the user role. The value begins with `0po`.
   *
   * If you do not set `roleId`, the default `ADMINISTRATOR` user role is assigned to the created
   * user. You can get the list of available user roles with `GET /v3/partner/roles`.
   */
  roleId?: string;
  /**
   * Username for signing in as the user.
   *
   * Set `username` as a unique alphanumeric value. The value must be 40 characters or fewer. This
   * field is not case-sensitive. Do not set the value as an email address or any PII value. BILL
   * uses this value to uniquely identify each user.
   */
  username: string;
  /**
   * Reference ID used as an external identifier.
   *
   * You can set this field as a unique alphanumeric value for your system to refer to the created
   * user.
   */
  externalReferenceId?: string;
  /** Set as `true` if the user accepts the BILL terms of service */
  acceptTermsOfService: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const partnerUserCreateRequestDtoProperties: s.Shape<PartnerUserCreateRequestDto> = {
  firstName: s.string(),
  lastName: s.optional(s.string()),
  email: s.string(),
  roleId: s.optional(s.string()),
  username: s.string(),
  externalReferenceId: s.optional(s.string()),
  acceptTermsOfService: s.boolean(),
};

export const partnerUserCreateRequestDtoInternalSchema: Schema<PartnerUserCreateRequestDto> =
  s.object<PartnerUserCreateRequestDto>(partnerUserCreateRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const partnerUserCreateRequestDtoSchema: Schema<PartnerUserCreateRequestDto> = s.lazySchema(() =>
  s.object<PartnerUserCreateRequestDto>(
    {
      ...partnerUserCreateRequestDtoProperties,
      firstName: s.string().check(s.minLength(1), s.maxLength(100)),
      lastName: s.optional(s.string().check(s.maxLength(100))),
      email: s.string().check(s.minLength(1)),
      username: s.string().check(s.minLength(1), s.maxLength(1000)),
    },
    { additionalProperties: s.json() },
  ),
);
