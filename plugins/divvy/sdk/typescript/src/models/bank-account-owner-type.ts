import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** BankAccountOwnerType Enum. */
export const BankAccountOwnerType = {
  Business: "BUSINESS",
  Personal: "PERSONAL",
} as const;
export type BankAccountOwnerType =
  | (typeof BankAccountOwnerType)[keyof typeof BankAccountOwnerType]
  | (string & {});

export const bankAccountOwnerTypeSchema: EnumSchema<BankAccountOwnerType> =
  s.enumOf<BankAccountOwnerType>(BankAccountOwnerType);
