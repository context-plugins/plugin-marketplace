import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** CustomerAccountType. */
export const CustomerAccountTypeRequest = {
  None: "NONE",
  Business: "BUSINESS",
  Person: "PERSON",
} as const;
export type CustomerAccountTypeRequest =
  | (typeof CustomerAccountTypeRequest)[keyof typeof CustomerAccountTypeRequest]
  | (string & {});

export const customerAccountTypeRequestSchema: EnumSchema<CustomerAccountTypeRequest> =
  s.enumOf<CustomerAccountTypeRequest>(CustomerAccountTypeRequest);
