import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The format of the account number. */
export const AccountNumberFormatResponse = {
  Iban: "iban",
} as const;
export type AccountNumberFormatResponse =
  | (typeof AccountNumberFormatResponse)[keyof typeof AccountNumberFormatResponse]
  | (string & {});

export const accountNumberFormatResponseSchema: EnumSchema<AccountNumberFormatResponse> =
  s.enumOf<AccountNumberFormatResponse>(AccountNumberFormatResponse);
