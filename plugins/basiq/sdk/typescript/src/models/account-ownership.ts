import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Value indicating the number of customers that have ownership of the account, according to the
 * data holder's definition of account ownership. Does not indicate that all account owners are
 * eligible consumers.
 */
export const AccountOwnership = {
  Unknown: "UNKNOWN",
  OneParty: "ONE_PARTY",
  TwoParty: "TWO_PARTY",
  ManyParty: "MANY_PARTY",
  Other: "OTHER",
} as const;
export type AccountOwnership = (typeof AccountOwnership)[keyof typeof AccountOwnership] | (string & {});

export const accountOwnershipSchema: EnumSchema<AccountOwnership> =
  s.enumOf<AccountOwnership>(AccountOwnership);
