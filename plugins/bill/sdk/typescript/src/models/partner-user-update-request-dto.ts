import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Update a user (last name updated) */
export type PartnerUserUpdateRequestDto = {
  /** User first name */
  firstName?: string;
  /** User last name */
  lastName?: string;
  /** User email address */
  email?: string;
  /**
   * BILL-generated ID of the user role. The value begins with `0po`.
   *
   * If you do not set `roleId`, the default `ADMINISTRATOR` user role is assigned to the created
   * user. You can get the list of available user roles with `GET /v3/partner/roles`.
   */
  roleId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const partnerUserUpdateRequestDtoSchema: Schema<PartnerUserUpdateRequestDto> =
  s.object<PartnerUserUpdateRequestDto>(
    {
      firstName: s.optional(s.string()),
      lastName: s.optional(s.string()),
      email: s.optional(s.string()),
      roleId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
