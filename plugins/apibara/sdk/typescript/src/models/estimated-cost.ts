import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { refinementMethodSchema, type RefinementMethod } from "./refinement-method.js";

/**
 * Apibara robust historical price estimate. The base comparable set uses distinct final sold lots
 * matching exact make + model + model year + primary damage; Copart "Sold on Approval" is excluded
 * because it is a non-final high bid. Base from/to are Q1-Q3 and at least 3 exact final-sale
 * comparables are required. When enough final sales exist for the target engine and mileage band
 * (or engine alone), a market-value multiplier refines the range for high/low trims. The most
 * recent retained non-final high bid from the same lot may be exposed as previous_high_bid_usd for
 * context only; it never changes from, median or to and is never treated as a confirmed sale.
 */
export type EstimatedCost = {
  /**
   * Lower bound in USD. Starts from the exact-damage Q1 and may be engine/mileage-refined when
   * sufficient final-sale data exists.
   */
  from: number;
  /**
   * Upper bound in USD. Starts from the exact-damage Q3 and may be engine/mileage-refined when
   * sufficient final-sale data exists. Previous lot bids never extend this bound.
   */
  to: number;
  /**
   * Central estimate in USD. Starts from the exact-damage median and may be engine/mileage-refined
   * when sufficient final-sale data exists. Previous lot bids never change this value.
   */
  median: number;
  /** Human-readable Q1-Q3 USD range. */
  text: string;
  /**
   * Number of distinct exact make + model + year + primary-damage final sold comparable lots.
   * Copart Sold on Approval is excluded. Estimate is null when fewer than 3 exist.
   */
  sampleCount: number;
  /**
   * Optional high/low-trim refinement. engine_mileage is preferred when at least 5 final-sale
   * comparables exist in the target engine+mileage band; engine is the fallback when at least 5
   * engine-matched final sales exist.
   */
  refinementMethod?: RefinementMethod | null;
  /**
   * Number of final-sale comparables behind the engine or engine+mileage refinement; null when no
   * refinement was applied.
   */
  refinementSampleCount?: number | null;
  /** Normalized engine displacement used by the refinement, in liters. */
  engineSizeL?: number | null;
  /**
   * Mileage band considered by the refinement, for example 0-30k or 30-75k. Engine-only fallback
   * may still report the target band.
   */
  mileageBucket?: string | null;
  /**
   * Median market-value ratio of the selected engine/mileage cohort to the same make+model+year
   * market, applied to the damage-specific base range.
   */
  marketMultiplier?: number | null;
  /**
   * Most recent retained high bid from the previous non-final auction cycle for the same
   * platform+lot (for example Not Sold or Sold on Approval). This is context only: it does not
   * change from, median or to and is not a confirmed sale price.
   */
  previousHighBidUsd?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const estimatedCostProperties: s.Shape<EstimatedCost> = {
  from: s.int(),
  to: s.int(),
  median: s.int(),
  text: s.string(),
  sampleCount: s.int(),
  refinementMethod: s.optionalNullable(s.lazy(() => refinementMethodSchema)),
  refinementSampleCount: s.optionalNullable(s.int()),
  engineSizeL: s.optionalNullable(s.float64()),
  mileageBucket: s.optionalNullable(s.string()),
  marketMultiplier: s.optionalNullable(s.float64()),
  previousHighBidUsd: s.optionalNullable(s.int()),
  _keysMap: {
    sampleCount: "sample_count",
    refinementMethod: "refinement_method",
    refinementSampleCount: "refinement_sample_count",
    engineSizeL: "engine_size_l",
    mileageBucket: "mileage_bucket",
    marketMultiplier: "market_multiplier",
    previousHighBidUsd: "previous_high_bid_usd",
  },
};

export const estimatedCostInternalSchema: Schema<EstimatedCost> = s.object<EstimatedCost>(
  estimatedCostProperties,
  { additionalProperties: s.json() },
);

export const estimatedCostSchema: Schema<EstimatedCost> = s.lazySchema(() =>
  s.object<EstimatedCost>(
    {
      ...estimatedCostProperties,
      from: s.int().check(s.gte(101)),
      to: s.int().check(s.gte(101)),
      median: s.int().check(s.gte(101)),
      sampleCount: s.int().check(s.gte(3)),
      refinementSampleCount: s.optionalNullable(s.int().check(s.gte(5))),
      previousHighBidUsd: s.optionalNullable(s.int().check(s.gte(101))),
    },
    { additionalProperties: s.json() },
  ),
);
