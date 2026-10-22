import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Expand1 = {
  AllFlags: "allFlags",
  AllSegments: "allSegments",
  AllMetrics: "allMetrics",
  AllAiConfigs: "allAIConfigs",
  AllResources: "allResources",
  Maintainer: "maintainer",
  FlagsSummary: "flagsSummary",
  SegmentsSummary: "segmentsSummary",
  MetricsSummary: "metricsSummary",
  AiConfigsSummary: "aiConfigsSummary",
  ResourceSummary: "resourceSummary",
} as const;
export type Expand1 = (typeof Expand1)[keyof typeof Expand1] | (string & {});

export const expand1Schema: EnumSchema<Expand1> = s.enumOf<Expand1>(Expand1);
