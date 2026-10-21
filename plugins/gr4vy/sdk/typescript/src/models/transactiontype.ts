import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Transactiontype = {
  Purchase: "PURCHASE",
  CardOnFile: "CARD_ON_FILE",
  Both: "BOTH",
} as const;
export type Transactiontype = (typeof Transactiontype)[keyof typeof Transactiontype] | (string & {});

export const transactiontypeSchema: EnumSchema<Transactiontype> = s.enumOf<Transactiontype>(Transactiontype);
