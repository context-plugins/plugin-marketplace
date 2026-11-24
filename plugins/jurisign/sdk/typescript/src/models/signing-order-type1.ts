import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SigningOrderType1 = {
  Parallel: "parallel",
  Sequential: "sequential",
} as const;
export type SigningOrderType1 = (typeof SigningOrderType1)[keyof typeof SigningOrderType1] | (string & {});

export const signingOrderType1Schema: EnumSchema<SigningOrderType1> =
  s.enumOf<SigningOrderType1>(SigningOrderType1);
