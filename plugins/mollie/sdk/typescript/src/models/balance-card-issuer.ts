import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BalanceCardIssuer = {
  Amex: "amex",
  Maestro: "maestro",
  CarteBancaire: "carte-bancaire",
  Other: "other",
} as const;
export type BalanceCardIssuer = (typeof BalanceCardIssuer)[keyof typeof BalanceCardIssuer] | (string & {});

export const balanceCardIssuerSchema: EnumSchema<BalanceCardIssuer> =
  s.enumOf<BalanceCardIssuer>(BalanceCardIssuer);
