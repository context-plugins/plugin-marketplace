import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** CustomerAccountType. */
export const CustomerAccountTypeResponse = {
  None: "NONE",
  Business: "BUSINESS",
  Person: "PERSON",
  Undefined: "UNDEFINED",
} as const;
export type CustomerAccountTypeResponse =
  | (typeof CustomerAccountTypeResponse)[keyof typeof CustomerAccountTypeResponse]
  | (string & {});

export const customerAccountTypeResponseSchema: EnumSchema<CustomerAccountTypeResponse> =
  s.enumOf<CustomerAccountTypeResponse>(CustomerAccountTypeResponse);
