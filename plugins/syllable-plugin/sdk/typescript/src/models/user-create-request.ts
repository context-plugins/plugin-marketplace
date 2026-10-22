import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { firstNameSchema, type FirstName } from "./unions/first-name.js";
import { lastNameSchema, type LastName } from "./unions/last-name.js";
import { loginType1Schema, type LoginType1 } from "./unions/login-type1.js";
import { utmSchema, type Utm } from "./unions/utm.js";

/** Request model to create a user. */
export type UserCreateRequest = {
  /** Email address of the user */
  email: string;
  /** First name of the user */
  firstName?: FirstName;
  /** Last name of the user */
  lastName?: LastName;
  /** ID of the role assigned to the user */
  roleId: number;
  /** Optional UTM campaign attribution to record in user_metadata. */
  utm?: Utm;
  /**
   * The type of login to use for the user. If not provided, defaults to google for \@gmail.com
   * email addresses, and username and password otherwise.
   */
  loginType?: LoginType1;
  /** Whether to skip authentication for the user. @default false */
  skipAuth?: boolean;
};

export const userCreateRequestSchema: Schema<UserCreateRequest> = s.object<UserCreateRequest>({
  email: s.string(),
  firstName: s.optional(s.lazy(() => firstNameSchema)),
  lastName: s.optional(s.lazy(() => lastNameSchema)),
  roleId: s.int(),
  utm: s.optional(s.lazy(() => utmSchema)),
  loginType: s.optional(s.lazy(() => loginType1Schema)),
  skipAuth: s.defaulted(s.boolean(), false),
  _keysMap: {
    firstName: "first_name",
    lastName: "last_name",
    roleId: "role_id",
    loginType: "login_type",
    skipAuth: "skip_auth",
  },
});
