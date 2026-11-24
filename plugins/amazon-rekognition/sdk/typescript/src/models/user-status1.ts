import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of an update made to a User. Reflects if the User has been updated for every requested
 * change.
 */
export const UserStatus1 = {
  Active: "ACTIVE",
  Updating: "UPDATING",
  Creating: "CREATING",
  Created: "CREATED",
} as const;
export type UserStatus1 = (typeof UserStatus1)[keyof typeof UserStatus1] | (string & {});

export const userStatus1Schema: EnumSchema<UserStatus1> = s.enumOf<UserStatus1>(UserStatus1);
