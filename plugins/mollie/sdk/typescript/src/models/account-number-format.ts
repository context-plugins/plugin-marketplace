import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The format of the account number. */
export const AccountNumberFormat = {
  Iban: "iban",
} as const;
export type AccountNumberFormat =
  | (typeof AccountNumberFormat)[keyof typeof AccountNumberFormat]
  | (string & {});

export const accountNumberFormatSchema: EnumSchema<AccountNumberFormat> =
  s.enumOf<AccountNumberFormat>(AccountNumberFormat);
