import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Entity1RazorpayVirtualAccountsApi = {
  BankAccount: "bank_account",
  Vpa: "vpa",
} as const;
export type Entity1RazorpayVirtualAccountsApi =
  | (typeof Entity1RazorpayVirtualAccountsApi)[keyof typeof Entity1RazorpayVirtualAccountsApi]
  | (string & {});

export const entity1RazorpayVirtualAccountsApiSchema: EnumSchema<Entity1RazorpayVirtualAccountsApi> =
  s.enumOf<Entity1RazorpayVirtualAccountsApi>(Entity1RazorpayVirtualAccountsApi);
