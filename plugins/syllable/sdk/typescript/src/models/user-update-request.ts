import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { firstNameSchema, type FirstName } from "./unions/first-name.js";
import { lastNameSchema, type LastName } from "./unions/last-name.js";
import { lastUpdatedComments4Schema, type LastUpdatedComments4 } from "./unions/last-updated-comments4.js";
import { utmSchema, type Utm } from "./unions/utm.js";

/** Request model to update an existing user. */
export type UserUpdateRequest = {
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
  /** Comments for the most recent edit to the user. */
  lastUpdatedComments?: LastUpdatedComments4;
};

export const userUpdateRequestSchema: Schema<UserUpdateRequest> = s.object<UserUpdateRequest>({
  email: s.string(),
  firstName: s.optional(s.lazy(() => firstNameSchema)),
  lastName: s.optional(s.lazy(() => lastNameSchema)),
  roleId: s.int(),
  utm: s.optional(s.lazy(() => utmSchema)),
  lastUpdatedComments: s.optional(s.lazy(() => lastUpdatedComments4Schema)),
  _keysMap: {
    firstName: "first_name",
    lastName: "last_name",
    roleId: "role_id",
    lastUpdatedComments: "last_updated_comments",
  },
});
