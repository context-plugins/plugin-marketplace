import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CheckTypeDto = {
  Missing: "missing",
  Invalid: "invalid",
  RowCount: "row_count",
  Aggregate: "aggregate",
  Schema: "schema",
  Duplicate: "duplicate",
  Freshness: "freshness",
  FailedRows: "failed_rows",
  Metric: "metric",
  GroupBy: "group_by",
  RowCountDiff: "row_count_diff",
  AggregateDiff: "aggregate_diff",
  FreshnessDiff: "freshness_diff",
  MetricDiff: "metric_diff",
  RowsDiff: "rows_diff",
  DuplicateDiff: "duplicate_diff",
  Llm: "llm",
  Hierarchy: "hierarchy",
  FuzzyDuplicate: "fuzzy_duplicate",
  ReferenceDiff: "reference_diff",
} as const;
export type CheckTypeDto = (typeof CheckTypeDto)[keyof typeof CheckTypeDto] | (string & {});

export const checkTypeDtoSchema: EnumSchema<CheckTypeDto> = s.enumOf<CheckTypeDto>(CheckTypeDto);
