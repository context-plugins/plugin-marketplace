import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = Mr 3 = Mrs 5 = Ms */
export const GenderPrefix = {
  _1: 1,
  _3: 3,
  _5: 5,
} as const;
export type GenderPrefix = (typeof GenderPrefix)[keyof typeof GenderPrefix] | (number & {});

export const genderPrefixSchema: EnumSchema<GenderPrefix> = s.enumOf<GenderPrefix>(GenderPrefix);
