import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Data5 = {
  /** Mapped buildings for this association. */
  buildingCount?: number;
  /** Summed footprint area across mapped buildings. */
  totalFootprintSqft?: number | null;
  /** Summed footprint area across mapped buildings. */
  totalFootprintSqm?: number | null;
  /** Largest building's footprint, and the average across all of them. */
  primaryBuildingSqft?: number | null;
  /** Largest building's footprint, and the average across all of them. */
  avgFootprintSqm?: number | null;
  /** Estimated from footprint; add a pitch multiplier for sloped roofs. */
  roofAreaSqftEstimate?: number | null;
  /** Perimeter x height estimate. A starting point for painting/waterproofing scope. */
  facadeAreaSqftEstimate?: number | null;
  /** Rough estimate from measured height only. Not a milestone determination. */
  floorsEstimate?: number | null;
  /**
   * Measured height, capped ~34m by the underlying source; null when unmeasured. Never a hard
   * stories count.
   */
  maxHeightM?: number | null;
  /** Confidence label for the height figure. */
  heightConfidence?: string | null;
  /** Recorded stories from the county parcel roll (FL only currently) — measured, not estimated. */
  stories?: number | null;
  /** Earliest recorded year built across the association's buildings. */
  yearBuilt?: number | null;
  /** True when a recorded building has 3+ stories — the real FL Ch. 553 signal. Reference-only. */
  milestoneInspectionRelevant?: boolean | null;
  /** Where each figure came from. */
  structuralSource?: string | null;
  /** Where each figure came from. */
  source?: string | null;
  /** Where each figure came from. */
  attribution?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data5Schema: Schema<Data5> = s.object<Data5>(
  {
    buildingCount: s.optional(s.float64()),
    totalFootprintSqft: s.optionalNullable(s.float64()),
    totalFootprintSqm: s.optionalNullable(s.float64()),
    primaryBuildingSqft: s.optionalNullable(s.float64()),
    avgFootprintSqm: s.optionalNullable(s.float64()),
    roofAreaSqftEstimate: s.optionalNullable(s.float64()),
    facadeAreaSqftEstimate: s.optionalNullable(s.float64()),
    floorsEstimate: s.optionalNullable(s.float64()),
    maxHeightM: s.optionalNullable(s.float64()),
    heightConfidence: s.optionalNullable(s.string()),
    stories: s.optionalNullable(s.float64()),
    yearBuilt: s.optionalNullable(s.float64()),
    milestoneInspectionRelevant: s.optionalNullable(s.boolean()),
    structuralSource: s.optionalNullable(s.string()),
    source: s.optionalNullable(s.string()),
    attribution: s.optionalNullable(s.string()),
    _keysMap: {
      buildingCount: "building_count",
      totalFootprintSqft: "total_footprint_sqft",
      totalFootprintSqm: "total_footprint_sqm",
      primaryBuildingSqft: "primary_building_sqft",
      avgFootprintSqm: "avg_footprint_sqm",
      roofAreaSqftEstimate: "roof_area_sqft_estimate",
      facadeAreaSqftEstimate: "facade_area_sqft_estimate",
      floorsEstimate: "floors_estimate",
      maxHeightM: "max_height_m",
      heightConfidence: "height_confidence",
      yearBuilt: "year_built",
      milestoneInspectionRelevant: "milestone_inspection_relevant",
      structuralSource: "structural_source",
    },
  },
  { additionalProperties: s.json() },
);
