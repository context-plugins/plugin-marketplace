import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Names of user fields supported for filtering/sorting on list endpoint. */
export const UserProperties = {
  Email: "email",
  FirstName: "first_name",
  LastName: "last_name",
  RoleId: "role_id",
  RoleName: "role_name",
  EmailFirstNameLastName: "email_first_name_last_name",
  ActivityStatus: "activity_status",
  LastUpdated: "last_updated",
} as const;
export type UserProperties = (typeof UserProperties)[keyof typeof UserProperties] | (string & {});

export const userPropertiesSchema: EnumSchema<UserProperties> = s.enumOf<UserProperties>(UserProperties);
