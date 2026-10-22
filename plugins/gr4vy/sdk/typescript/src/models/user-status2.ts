import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the user. */
export const UserStatus2 = {
  Active: "active",
  Pending: "pending",
  Deleted: "deleted",
  Reset: "reset",
} as const;
export type UserStatus2 = (typeof UserStatus2)[keyof typeof UserStatus2] | (string & {});

export const userStatus2Schema: EnumSchema<UserStatus2> = s.enumOf<UserStatus2>(UserStatus2);
