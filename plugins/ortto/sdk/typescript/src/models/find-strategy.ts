import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 0 = any, 1 = sequential, 2 = all. */
export const FindStrategy = {
  _0: 0,
  _1: 1,
  _2: 2,
} as const;
export type FindStrategy = (typeof FindStrategy)[keyof typeof FindStrategy] | (number & {});

export const findStrategySchema: EnumSchema<FindStrategy> = s.enumOf<FindStrategy>(FindStrategy);
