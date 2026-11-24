import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** AccountRequestType. */
export const AccountTypeRequest = {
  None: "NONE",
  Business: "BUSINESS",
  Person: "PERSON",
} as const;
export type AccountTypeRequest = (typeof AccountTypeRequest)[keyof typeof AccountTypeRequest] | (string & {});

export const accountTypeRequestSchema: EnumSchema<AccountTypeRequest> =
  s.enumOf<AccountTypeRequest>(AccountTypeRequest);
