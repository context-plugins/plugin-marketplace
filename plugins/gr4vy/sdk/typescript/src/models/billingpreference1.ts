import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Billingpreference1 = {
  All: "ALL",
  None: "NONE",
} as const;
export type Billingpreference1 = (typeof Billingpreference1)[keyof typeof Billingpreference1] | (string & {});

export const billingpreference1Schema: EnumSchema<Billingpreference1> =
  s.enumOf<Billingpreference1>(Billingpreference1);
