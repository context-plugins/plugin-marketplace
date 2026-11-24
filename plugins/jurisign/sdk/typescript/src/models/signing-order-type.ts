import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 0 = parallel (all signers at once), 1 = sequential (one after another) */
export const SigningOrderType = {
  _0: 0,
  _1: 1,
} as const;
export type SigningOrderType = (typeof SigningOrderType)[keyof typeof SigningOrderType] | (number & {});

export const signingOrderTypeSchema: EnumSchema<SigningOrderType> =
  s.enumOf<SigningOrderType>(SigningOrderType);
