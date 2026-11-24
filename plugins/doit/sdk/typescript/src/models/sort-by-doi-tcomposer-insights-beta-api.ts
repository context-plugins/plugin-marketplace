import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SortByDoiTComposerInsightsBetaApi = {
  Severity: "severity",
  Title: "title",
  DetectionTime: "detection_time",
  ActiveResultsCount: "active_results_count",
  TotalResultsCount: "total_results_count",
} as const;
export type SortByDoiTComposerInsightsBetaApi =
  | (typeof SortByDoiTComposerInsightsBetaApi)[keyof typeof SortByDoiTComposerInsightsBetaApi]
  | (string & {});

export const sortByDoiTComposerInsightsBetaApiSchema: EnumSchema<SortByDoiTComposerInsightsBetaApi> =
  s.enumOf<SortByDoiTComposerInsightsBetaApi>(SortByDoiTComposerInsightsBetaApi);
