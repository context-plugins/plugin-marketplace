import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncludeLiquidity = {
  True: "true",
  False: "false",
} as const;
export type IncludeLiquidity = (typeof IncludeLiquidity)[keyof typeof IncludeLiquidity] | (string & {});

export const includeLiquiditySchema: EnumSchema<IncludeLiquidity> =
  s.enumOf<IncludeLiquidity>(IncludeLiquidity);
