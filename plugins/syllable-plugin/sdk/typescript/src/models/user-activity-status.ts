import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const UserActivityStatus = {
  NotInvited: "not_invited",
  Invited: "invited",
  Active: "active",
} as const;
export type UserActivityStatus = (typeof UserActivityStatus)[keyof typeof UserActivityStatus] | (string & {});

export const userActivityStatusSchema: EnumSchema<UserActivityStatus> =
  s.enumOf<UserActivityStatus>(UserActivityStatus);
