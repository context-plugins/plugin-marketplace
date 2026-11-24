import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LotStatus = {
  All: "All",
  Timed: "Timed",
  BuyNow: "Buy Now",
} as const;
export type LotStatus = (typeof LotStatus)[keyof typeof LotStatus] | (string & {});

export const lotStatusSchema: EnumSchema<LotStatus> = s.enumOf<LotStatus>(LotStatus);
