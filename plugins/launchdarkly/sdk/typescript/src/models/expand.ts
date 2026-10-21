import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Expand = {
  FlagsSummary: "flagsSummary",
  SegmentsSummary: "segmentsSummary",
  MetricsSummary: "metricsSummary",
  AiConfigsSummary: "aiConfigsSummary",
  ResourceSummary: "resourceSummary",
} as const;
export type Expand = (typeof Expand)[keyof typeof Expand] | (string & {});

export const expandSchema: EnumSchema<Expand> = s.enumOf<Expand>(Expand);
