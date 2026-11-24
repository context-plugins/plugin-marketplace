import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Required. The granularity used to interpret the `startOffset` and `endOffset` for the extended
 * reporting date range for a cohort report.
 */
export const Granularity = {
  GranularityUnspecified: "GRANULARITY_UNSPECIFIED",
  Daily: "DAILY",
  Weekly: "WEEKLY",
  Monthly: "MONTHLY",
} as const;
export type Granularity = (typeof Granularity)[keyof typeof Granularity] | (string & {});

export const granularitySchema: EnumSchema<Granularity> = s.enumOf<Granularity>(Granularity);
