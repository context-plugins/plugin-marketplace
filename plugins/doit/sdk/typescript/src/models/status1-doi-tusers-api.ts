import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the user (invited) */
export const Status1DoiTUsersApi = {
  Invited: "invited",
} as const;
export type Status1DoiTUsersApi =
  | (typeof Status1DoiTUsersApi)[keyof typeof Status1DoiTUsersApi]
  | (string & {});

export const status1DoiTUsersApiSchema: EnumSchema<Status1DoiTUsersApi> =
  s.enumOf<Status1DoiTUsersApi>(Status1DoiTUsersApi);
