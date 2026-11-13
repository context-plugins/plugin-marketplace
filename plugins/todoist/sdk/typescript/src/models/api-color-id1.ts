import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ApiColorId1 = {
  _30: 30,
  _31: 31,
  _32: 32,
  _33: 33,
  _34: 34,
  _35: 35,
  _36: 36,
  _37: 37,
  _38: 38,
  _39: 39,
  _40: 40,
  _41: 41,
  _42: 42,
  _43: 43,
  _44: 44,
  _45: 45,
  _46: 46,
  _47: 47,
  _48: 48,
  _49: 49,
} as const;
export type ApiColorId1 = (typeof ApiColorId1)[keyof typeof ApiColorId1] | (number & {});

export const apiColorId1Schema: EnumSchema<ApiColorId1> = s.enumOf<ApiColorId1>(ApiColorId1);
