import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Card type. */
export const Paymentcardtype = {
  Credit: "CREDIT",
  Debit: "DEBIT",
} as const;
export type Paymentcardtype = (typeof Paymentcardtype)[keyof typeof Paymentcardtype] | (string & {});

export const paymentcardtypeSchema: EnumSchema<Paymentcardtype> = s.enumOf<Paymentcardtype>(Paymentcardtype);
