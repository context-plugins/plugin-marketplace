import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Method = {
  Card: "card",
  Netbanking: "netbanking",
  Wallet: "wallet",
  Emi: "emi",
  Upi: "upi",
} as const;
export type Method = (typeof Method)[keyof typeof Method] | (string & {});

export const methodSchema: EnumSchema<Method> = s.enumOf<Method>(Method);
