import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The activity status of the user */
export const UserActivityStatus2 = {
  NotInvited: "not_invited",
  Invited: "invited",
  Active: "active",
} as const;
export type UserActivityStatus2 =
  | (typeof UserActivityStatus2)[keyof typeof UserActivityStatus2]
  | (string & {});

export const userActivityStatus2Schema: EnumSchema<UserActivityStatus2> =
  s.enumOf<UserActivityStatus2>(UserActivityStatus2);
