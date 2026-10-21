import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const UserStatus = {
  Active: "active",
  Pending: "pending",
  Deleted: "deleted",
  Reset: "reset",
} as const;
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus] | (string & {});

export const userStatusSchema: EnumSchema<UserStatus> = s.enumOf<UserStatus>(UserStatus);
