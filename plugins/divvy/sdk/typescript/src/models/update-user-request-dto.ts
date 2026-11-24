import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputRoleTypeSchema, type InputRoleType } from "./input-role-type.js";

/** Update a user (role updated) */
export type UpdateUserRequestDto = {
  /** User first name */
  firstName?: string;
  /** User last name */
  lastName?: string;
  /** User email address */
  email?: string;
  role?: InputRoleType;
  /** User date of birth. The value is in the `yyyy-MM-dd` format. */
  dateOfBirth?: string;
  /** User phone number */
  phoneNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateUserRequestDtoSchema: Schema<UpdateUserRequestDto> = s.object<UpdateUserRequestDto>(
  {
    firstName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    email: s.optional(s.string()),
    role: s.optional(s.lazy(() => inputRoleTypeSchema)),
    dateOfBirth: s.optional(s.dateOnly()),
    phoneNumber: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
