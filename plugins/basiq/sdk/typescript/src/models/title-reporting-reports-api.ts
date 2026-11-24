import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Title of the error */
export const TitleReportingReportsApi = {
  ConnectionSourceNotSupported: "Connection source not supported.",
  InvalidUsersFilterMaximum5UsersAllowed: "Invalid users filter. Maximum 5 users allowed.",
  TheFollowingAccountsAreDuplicated121332232949433:
    "The following accounts are duplicated: \n['121', '332'], ['232', '949', '433'].",
  FollowingUserIdSAccountIdSHaveBeenEnteredMoreThanOnce123123:
    'Following user ID(s)/account ID(s) have been entered more than once: \n["123", "123"].',
} as const;
export type TitleReportingReportsApi =
  | (typeof TitleReportingReportsApi)[keyof typeof TitleReportingReportsApi]
  | (string & {});

export const titleReportingReportsApiSchema: EnumSchema<TitleReportingReportsApi> =
  s.enumOf<TitleReportingReportsApi>(TitleReportingReportsApi);
