import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Name = {
  Mx: "MX",
  Plaid: "Plaid",
  Flinks: "Flinks",
  Finicity: "Finicity",
  CheckoutCom: "Checkout.com",
} as const;
export type Name = (typeof Name)[keyof typeof Name] | (string & {});

export const nameSchema: EnumSchema<Name> = s.enumOf<Name>(Name);
