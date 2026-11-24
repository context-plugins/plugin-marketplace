import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { aggregateDiagnosticsV4Schema, type AggregateDiagnosticsV4 } from "./aggregate-diagnostics-v4.js";
import {
  aggregateDiffDiagnosticsV4Schema,
  type AggregateDiffDiagnosticsV4,
} from "./aggregate-diff-diagnostics-v4.js";
import {
  duplicateDiffDiagnosticsV4Schema,
  type DuplicateDiffDiagnosticsV4,
} from "./duplicate-diff-diagnostics-v4.js";
import { freshnessDiagnosticsV4Schema, type FreshnessDiagnosticsV4 } from "./freshness-diagnostics-v4.js";
import {
  freshnessDiffDiagnosticsV4Schema,
  type FreshnessDiffDiagnosticsV4,
} from "./freshness-diff-diagnostics-v4.js";
import {
  fuzzyDuplicateDiagnosticsV4Schema,
  type FuzzyDuplicateDiagnosticsV4,
} from "./fuzzy-duplicate-diagnostics-v4.js";
import { groupByDiagnosticsV4Schema, type GroupByDiagnosticsV4 } from "./group-by-diagnostics-v4.js";
import { hierarchyDiagnosticsV4Schema, type HierarchyDiagnosticsV4 } from "./hierarchy-diagnostics-v4.js";
import { invalidDiagnosticsV4Schema, type InvalidDiagnosticsV4 } from "./invalid-diagnostics-v4.js";
import { llmDiagnosticsV4Schema, type LlmDiagnosticsV4 } from "./llm-diagnostics-v4.js";
import { metricDiagnosticsV4Schema, type MetricDiagnosticsV4 } from "./metric-diagnostics-v4.js";
import { metricDiffDiagnosticsV4Schema, type MetricDiffDiagnosticsV4 } from "./metric-diff-diagnostics-v4.js";
import { missingDiagnosticsV4Schema, type MissingDiagnosticsV4 } from "./missing-diagnostics-v4.js";
import {
  referenceDiffDiagnosticsV4Schema,
  type ReferenceDiffDiagnosticsV4,
} from "./reference-diff-diagnostics-v4.js";
import {
  rowCountDiffDiagnosticsV4Schema,
  type RowCountDiffDiagnosticsV4,
} from "./row-count-diff-diagnostics-v4.js";
import { rowsDiffDiagnosticsV4Schema, type RowsDiffDiagnosticsV4 } from "./rows-diff-diagnostics-v4.js";
import { schemaDiagnosticsV4Schema, type SchemaDiagnosticsV4 } from "./schema-diagnostics-v4.js";

export type CheckResultDiagnosticsV4 = {
  aggregate?: AggregateDiagnosticsV4;
  aggregateDiff?: AggregateDiffDiagnosticsV4;
  duplicate?: InvalidDiagnosticsV4;
  duplicateDiff?: DuplicateDiffDiagnosticsV4;
  failedRows?: MissingDiagnosticsV4;
  freshness?: FreshnessDiagnosticsV4;
  freshnessDiff?: FreshnessDiffDiagnosticsV4;
  fuzzyDuplicate?: FuzzyDuplicateDiagnosticsV4;
  groupBy?: GroupByDiagnosticsV4;
  hierarchy?: HierarchyDiagnosticsV4;
  invalid?: InvalidDiagnosticsV4;
  llm?: LlmDiagnosticsV4;
  metric?: MetricDiagnosticsV4;
  metricDiff?: MetricDiffDiagnosticsV4;
  missing?: MissingDiagnosticsV4;
  referenceDiff?: ReferenceDiffDiagnosticsV4;
  rowCount?: AggregateDiagnosticsV4;
  rowCountDiff?: RowCountDiffDiagnosticsV4;
  rowsDiff?: RowsDiffDiagnosticsV4;
  schema?: SchemaDiagnosticsV4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkResultDiagnosticsV4Schema: Schema<CheckResultDiagnosticsV4> =
  s.object<CheckResultDiagnosticsV4>(
    {
      aggregate: s.optional(s.lazy(() => aggregateDiagnosticsV4Schema)),
      aggregateDiff: s.optional(s.lazy(() => aggregateDiffDiagnosticsV4Schema)),
      duplicate: s.optional(s.lazy(() => invalidDiagnosticsV4Schema)),
      duplicateDiff: s.optional(s.lazy(() => duplicateDiffDiagnosticsV4Schema)),
      failedRows: s.optional(s.lazy(() => missingDiagnosticsV4Schema)),
      freshness: s.optional(s.lazy(() => freshnessDiagnosticsV4Schema)),
      freshnessDiff: s.optional(s.lazy(() => freshnessDiffDiagnosticsV4Schema)),
      fuzzyDuplicate: s.optional(s.lazy(() => fuzzyDuplicateDiagnosticsV4Schema)),
      groupBy: s.optional(s.lazy(() => groupByDiagnosticsV4Schema)),
      hierarchy: s.optional(s.lazy(() => hierarchyDiagnosticsV4Schema)),
      invalid: s.optional(s.lazy(() => invalidDiagnosticsV4Schema)),
      llm: s.optional(s.lazy(() => llmDiagnosticsV4Schema)),
      metric: s.optional(s.lazy(() => metricDiagnosticsV4Schema)),
      metricDiff: s.optional(s.lazy(() => metricDiffDiagnosticsV4Schema)),
      missing: s.optional(s.lazy(() => missingDiagnosticsV4Schema)),
      referenceDiff: s.optional(s.lazy(() => referenceDiffDiagnosticsV4Schema)),
      rowCount: s.optional(s.lazy(() => aggregateDiagnosticsV4Schema)),
      rowCountDiff: s.optional(s.lazy(() => rowCountDiffDiagnosticsV4Schema)),
      rowsDiff: s.optional(s.lazy(() => rowsDiffDiagnosticsV4Schema)),
      schema: s.optional(s.lazy(() => schemaDiagnosticsV4Schema)),
      _keysMap: {
        aggregateDiff: "aggregate_diff",
        duplicateDiff: "duplicate_diff",
        failedRows: "failed_rows",
        freshnessDiff: "freshness_diff",
        fuzzyDuplicate: "fuzzy_duplicate",
        groupBy: "group_by",
        metricDiff: "metric_diff",
        referenceDiff: "reference_diff",
        rowCount: "row_count",
        rowCountDiff: "row_count_diff",
        rowsDiff: "rows_diff",
      },
    },
    { additionalProperties: s.json() },
  );
