import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = Cash 3 = Credit 5 = Both */
export const SalesType = {
  _1: 1,
  _3: 3,
  _5: 5,
} as const;
export type SalesType = (typeof SalesType)[keyof typeof SalesType] | (number & {});

export const salesTypeSchema: EnumSchema<SalesType> = s.enumOf<SalesType>(SalesType);
