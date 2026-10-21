import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the business account. */
export const AccountStatus = {
  Active: "active",
  Blocked: "blocked",
  Closed: "closed",
} as const;
export type AccountStatus = (typeof AccountStatus)[keyof typeof AccountStatus] | (string & {});

export const accountStatusSchema: EnumSchema<AccountStatus> = s.enumOf<AccountStatus>(AccountStatus);
