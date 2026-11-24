import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { estimatedCostInternalSchema, estimatedCostSchema, type EstimatedCost } from "./estimated-cost.js";

export type PricingInfo = {
  /** Current observed bid. Zero/unavailable source values are normalized to null. */
  currentBidUsd?: number | null;
  /** Buy Now amount; unavailable/zero source placeholders are null. */
  buyNowUsd?: number | null;
  /**
   * Canonical persisted final/approval price when positive; unavailable/zero source placeholders
   * are null.
   */
  salePriceUsd?: number | null;
  /**
   * Source-backed observation timestamp for current_bid_usd when a matching bid event for the
   * current auction cycle was captured. Null when no matching source timestamp exists; never
   * inferred from generic vehicle updated_at.
   */
  currentBidAt?: Date | null;
  /** Legacy secondary source bid field. Zero/unavailable values are normalized to null. */
  currentBid2Usd?: number | null;
  /** Persisted last known positive sale price; unavailable/zero source placeholders are null. */
  lastSoldPriceUsd?: number | null;
  /**
   * Copart Estimated Retail Value (ERV) when the Copart source provides a positive value. Null for
   * IAAI and for Copart records where ERV is unavailable or zero.
   */
  estimatedRetailValueUsd?: number | null;
  /**
   * Apibara robust historical final-sale estimate. Exact make + model + model year + primary damage
   * Q1-Q3 is the base and fewer than 3 exact final-sale comparables yields null. Copart Sold on
   * Approval / On Approval is excluded. When sufficient final sales exist, engine + mileage-band
   * (or engine-only) market-value refinement adjusts high/low-trim vehicles. The most recent
   * retained non-final bid for the same lot may be exposed as previous_high_bid_usd strictly as
   * context and never changes the Q1-Q3 range or median. Distinct from Copart
   * estimated_retail_value_usd.
   */
  estimatedCost?: EstimatedCost | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const pricingInfoProperties: s.Shape<PricingInfo> = {
  currentBidUsd: s.optionalNullable(s.float64()),
  buyNowUsd: s.optionalNullable(s.float64()),
  salePriceUsd: s.optionalNullable(s.float64()),
  currentBidAt: s.optionalNullable(s.dateTime()),
  currentBid2Usd: s.optionalNullable(s.float64()),
  lastSoldPriceUsd: s.optionalNullable(s.float64()),
  estimatedRetailValueUsd: s.optionalNullable(s.float64()),
  estimatedCost: s.optionalNullable(s.lazy(() => estimatedCostInternalSchema)),
  _keysMap: {
    currentBidUsd: "current_bid_usd",
    buyNowUsd: "buy_now_usd",
    salePriceUsd: "sale_price_usd",
    currentBidAt: "current_bid_at",
    currentBid2Usd: "current_bid2_usd",
    lastSoldPriceUsd: "last_sold_price_usd",
    estimatedRetailValueUsd: "estimated_retail_value_usd",
    estimatedCost: "estimated_cost",
  },
};

export const pricingInfoInternalSchema: Schema<PricingInfo> = s.object<PricingInfo>(pricingInfoProperties, {
  additionalProperties: s.json(),
});

export const pricingInfoSchema: Schema<PricingInfo> = s.lazySchema(() =>
  s.object<PricingInfo>(
    {
      ...pricingInfoProperties,
      estimatedCost: s.optionalNullable(s.lazy(() => estimatedCostSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
