import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Bidding strategy for the ad set */
export const BidStrategy = {
  LowestCostWithoutCap: "LOWEST_COST_WITHOUT_CAP",
  LowestCostWithBidCap: "LOWEST_COST_WITH_BID_CAP",
  CostCap: "COST_CAP",
} as const;
export type BidStrategy = (typeof BidStrategy)[keyof typeof BidStrategy] | (string & {});

export const bidStrategySchema: EnumSchema<BidStrategy> = s.enumOf<BidStrategy>(BidStrategy);
