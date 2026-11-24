import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BidStrategy1 = {
  LowestCostWithoutCap: "LOWEST_COST_WITHOUT_CAP",
  LowestCostWithBidCap: "LOWEST_COST_WITH_BID_CAP",
  CostCap: "COST_CAP",
} as const;
export type BidStrategy1 = (typeof BidStrategy1)[keyof typeof BidStrategy1] | (string & {});

export const bidStrategy1Schema: EnumSchema<BidStrategy1> = s.enumOf<BidStrategy1>(BidStrategy1);
