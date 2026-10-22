import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the balance. */
export const BalanceStatus = {
  Active: "active",
  Inactive: "inactive",
} as const;
export type BalanceStatus = (typeof BalanceStatus)[keyof typeof BalanceStatus] | (string & {});

export const balanceStatusSchema: EnumSchema<BalanceStatus> = s.enumOf<BalanceStatus>(BalanceStatus);
