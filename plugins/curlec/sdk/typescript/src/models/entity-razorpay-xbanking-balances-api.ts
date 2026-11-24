import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityRazorpayXBankingBalancesApi = {
  BankingBalance: "banking_balance",
} as const;
export type EntityRazorpayXBankingBalancesApi =
  | (typeof EntityRazorpayXBankingBalancesApi)[keyof typeof EntityRazorpayXBankingBalancesApi]
  | (string & {});

export const entityRazorpayXBankingBalancesApiSchema: EnumSchema<EntityRazorpayXBankingBalancesApi> =
  s.enumOf<EntityRazorpayXBankingBalancesApi>(EntityRazorpayXBankingBalancesApi);
