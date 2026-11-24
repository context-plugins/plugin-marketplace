import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * To create an Explainability for all time points in your forecast horizon, use ALL. To create an
 * Explainability for specific time points in your forecast horizon, use SPECIFIC. Specify time
 * points with the StartDateTime and EndDateTime parameters within the CreateExplainability
 * operation.
 */
export const TimePointGranularity = {
  All: "ALL",
  Specific: "SPECIFIC",
} as const;
export type TimePointGranularity =
  | (typeof TimePointGranularity)[keyof typeof TimePointGranularity]
  | (string & {});

export const timePointGranularitySchema: EnumSchema<TimePointGranularity> =
  s.enumOf<TimePointGranularity>(TimePointGranularity);
