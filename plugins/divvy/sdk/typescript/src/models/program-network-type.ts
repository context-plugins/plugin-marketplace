import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** ProgramNetworkType enum for Spend \& Expense Transactions. */
export const ProgramNetworkType = {
  Visa: "VISA",
  Mastercard: "MASTERCARD",
} as const;
export type ProgramNetworkType = (typeof ProgramNetworkType)[keyof typeof ProgramNetworkType] | (string & {});

export const programNetworkTypeSchema: EnumSchema<ProgramNetworkType> =
  s.enumOf<ProgramNetworkType>(ProgramNetworkType);
