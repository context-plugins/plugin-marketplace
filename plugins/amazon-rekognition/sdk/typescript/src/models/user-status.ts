import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of an update made to a UserID. Reflects if the UserID has been updated for every
 * requested change.
 */
export const UserStatus = {
  Active: "ACTIVE",
  Updating: "UPDATING",
  Creating: "CREATING",
  Created: "CREATED",
} as const;
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus] | (string & {});

export const userStatusSchema: EnumSchema<UserStatus> = s.enumOf<UserStatus>(UserStatus);
