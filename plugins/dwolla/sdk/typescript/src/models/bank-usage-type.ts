import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The usage type of the bank account. Indicates if this is a settlement account for card network
 * processors.
 */
export const BankUsageType = {
  CardNetwork: "card-network",
} as const;
export type BankUsageType = (typeof BankUsageType)[keyof typeof BankUsageType] | (string & {});

export const bankUsageTypeSchema: EnumSchema<BankUsageType> = s.enumOf<BankUsageType>(BankUsageType);
