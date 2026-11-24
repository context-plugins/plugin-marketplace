import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = Include 3 = Exclude 5 = Zero 7 = None */
export const VatTypes = {
  _1: 1,
  _3: 3,
  _5: 5,
  _7: 7,
} as const;
export type VatTypes = (typeof VatTypes)[keyof typeof VatTypes] | (number & {});

export const vatTypesSchema: EnumSchema<VatTypes> = s.enumOf<VatTypes>(VatTypes);
