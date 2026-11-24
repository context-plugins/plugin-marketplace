import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UsersRequest1 = {
  /** The end-users email address. */
  email?: string;
  /** The end-users mobile number. */
  mobile?: string;
  /** The end-users first name as an optional additional parameter. */
  firstName?: string;
  /** The end-users middle name as an optional additional parameter. */
  middleName?: string;
  /** The end-users last name as an optional additional parameter. */
  lastName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersRequest1Schema: Schema<UsersRequest1> = s.object<UsersRequest1>(
  {
    email: s.optional(s.string()),
    mobile: s.optional(s.string()),
    firstName: s.optional(s.string()),
    middleName: s.optional(s.string()),
    lastName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
