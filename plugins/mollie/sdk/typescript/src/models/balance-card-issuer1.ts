import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** In case of payments transactions with card, the card issuer will be available */
export const BalanceCardIssuer1 = {
  Amex: "amex",
  Maestro: "maestro",
  CarteBancaire: "carte-bancaire",
  Other: "other",
} as const;
export type BalanceCardIssuer1 = (typeof BalanceCardIssuer1)[keyof typeof BalanceCardIssuer1] | (string & {});

export const balanceCardIssuer1Schema: EnumSchema<BalanceCardIssuer1> =
  s.enumOf<BalanceCardIssuer1>(BalanceCardIssuer1);
