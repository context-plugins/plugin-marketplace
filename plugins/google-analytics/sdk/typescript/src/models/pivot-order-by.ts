import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pivotSelectionSchema, type PivotSelection } from "./pivot-selection.js";

/** Sorts by a pivot column group. */
export type PivotOrderBy = {
  /**
   * In the response to order by, order rows by this column. Must be a metric name from the request.
   */
  metricName?: string;
  /**
   * Used to select a dimension name and value pivot. If multiple pivot selections are given, the
   * sort occurs on rows where all pivot selection dimension name and value pairs match the row's
   * dimension name and value pair.
   */
  pivotSelections?: PivotSelection[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pivotOrderBySchema: Schema<PivotOrderBy> = s.object<PivotOrderBy>(
  {
    metricName: s.optional(s.string()),
    pivotSelections: s.optional(s.array(s.lazy(() => pivotSelectionSchema))),
  },
  { additionalProperties: s.json() },
);
