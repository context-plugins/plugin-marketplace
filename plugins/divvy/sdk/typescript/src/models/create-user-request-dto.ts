import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inputRoleTypeSchema, type InputRoleType } from "./input-role-type.js";

/** Create a user */
export type CreateUserRequestDto = {
  /** User first name */
  firstName: string;
  /** User last name */
  lastName: string;
  /** User email address */
  email: string;
  role: InputRoleType;
  /** User date of birth. The value is in the `yyyy-MM-dd` format. */
  dateOfBirth?: string;
  /** User phone number */
  phoneNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createUserRequestDtoProperties: s.Shape<CreateUserRequestDto> = {
  firstName: s.string(),
  lastName: s.string(),
  email: s.string(),
  role: inputRoleTypeSchema,
  dateOfBirth: s.optional(s.dateOnly()),
  phoneNumber: s.optional(s.string()),
};

export const createUserRequestDtoInternalSchema: Schema<CreateUserRequestDto> =
  s.object<CreateUserRequestDto>(createUserRequestDtoProperties, { additionalProperties: s.json() });

export const createUserRequestDtoSchema: Schema<CreateUserRequestDto> = s.lazySchema(() =>
  s.object<CreateUserRequestDto>(
    {
      ...createUserRequestDtoProperties,
      firstName: s.string().check(s.minLength(1)),
      lastName: s.string().check(s.minLength(1)),
      email: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
