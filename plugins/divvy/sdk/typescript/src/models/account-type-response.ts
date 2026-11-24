import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** AccountType. */
export const AccountTypeResponse = {
  None: "NONE",
  Business: "BUSINESS",
  Person: "PERSON",
  Undefined: "UNDEFINED",
} as const;
export type AccountTypeResponse =
  | (typeof AccountTypeResponse)[keyof typeof AccountTypeResponse]
  | (string & {});

export const accountTypeResponseSchema: EnumSchema<AccountTypeResponse> =
  s.enumOf<AccountTypeResponse>(AccountTypeResponse);
