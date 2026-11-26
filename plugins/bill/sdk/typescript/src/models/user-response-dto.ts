import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { roleTypeSchema, type RoleType } from "./role-type.js";

/** Users response. */
export type UserResponseDto = {
  /**
   * BILL-generated ID of the user
   *
   * @deprecated
   */
  id?: string;
  /** BILL-generated UUID of the user */
  uuid?: string;
  /** User first name */
  firstName?: string;
  /** User last name */
  lastName?: string;
  /** User email address */
  email?: string;
  /** Receipt categorization email address */
  receiptEmail?: string;
  /** Set as `true` if the user is deleted */
  retired?: boolean;
  /** Set as `true` if the company email address is set for the user */
  useCompanyMailingAddress?: boolean;
  /** Set as `true` if SMS notifications are enabled for the user */
  smsOptIn?: boolean;
  /** Set as `true` if the user date of birth is set */
  hasDateOfBirth?: boolean;
  role?: RoleType;
  /** User phone number */
  phoneNumber?: string;
  /** User created date and time */
  createdTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userResponseDtoSchema: Schema<UserResponseDto> = s.object<UserResponseDto>(
  {
    id: s.optional(s.string()),
    uuid: s.optional(s.string()),
    firstName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    email: s.optional(s.string()),
    receiptEmail: s.optional(s.string()),
    retired: s.optional(s.boolean()),
    useCompanyMailingAddress: s.optional(s.boolean()),
    smsOptIn: s.optional(s.boolean()),
    hasDateOfBirth: s.optional(s.boolean()),
    role: s.optional(s.lazy(() => roleTypeSchema)),
    phoneNumber: s.optional(s.string()),
    createdTime: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
