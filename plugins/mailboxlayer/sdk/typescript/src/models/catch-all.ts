import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CatchAll = {
  _0: 0,
  _1: 1,
} as const;
export type CatchAll = (typeof CatchAll)[keyof typeof CatchAll] | (number & {});

export const catchAllSchema: EnumSchema<CatchAll> = s.enumOf<CatchAll>(CatchAll);
