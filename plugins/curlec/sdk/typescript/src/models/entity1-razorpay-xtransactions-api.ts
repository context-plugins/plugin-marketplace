import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Entity1RazorpayXTransactionsApi = {
  Payout: "payout",
  BankTransfer: "bank_transfer",
} as const;
export type Entity1RazorpayXTransactionsApi =
  | (typeof Entity1RazorpayXTransactionsApi)[keyof typeof Entity1RazorpayXTransactionsApi]
  | (string & {});

export const entity1RazorpayXTransactionsApiSchema: EnumSchema<Entity1RazorpayXTransactionsApi> =
  s.enumOf<Entity1RazorpayXTransactionsApi>(Entity1RazorpayXTransactionsApi);
