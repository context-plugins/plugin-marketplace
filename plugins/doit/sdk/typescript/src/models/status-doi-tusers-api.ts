import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the user (active or invited). */
export const StatusDoiTUsersApi = {
  Active: "active",
  Invited: "invited",
} as const;
export type StatusDoiTUsersApi = (typeof StatusDoiTUsersApi)[keyof typeof StatusDoiTUsersApi] | (string & {});

export const statusDoiTUsersApiSchema: EnumSchema<StatusDoiTUsersApi> =
  s.enumOf<StatusDoiTUsersApi>(StatusDoiTUsersApi);
