import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { monitoringMetricSchema, type MonitoringMetric } from "./monitoring-metric.js";
import { nextCursorSchema, type NextCursor } from "./unions/next-cursor.js";
import { previousCursorSchema, type PreviousCursor } from "./unions/previous-cursor.js";

export type MonitoringMetrics = {
  /** A list of items returned for this request. */
  items: MonitoringMetric[];
  /** The number of items for this page. @default 20 */
  limit?: number;
  /** The cursor pointing at the next page of items. */
  nextCursor?: NextCursor;
  /** The cursor pointing at the previous page of items. */
  previousCursor?: PreviousCursor;
};

export const monitoringMetricsSchema: Schema<MonitoringMetrics> = s.object<MonitoringMetrics>({
  items: s.array(s.lazy(() => monitoringMetricSchema)),
  limit: s.defaulted(s.int(), 20),
  nextCursor: s.optional(s.lazy(() => nextCursorSchema)),
  previousCursor: s.optional(s.lazy(() => previousCursorSchema)),
  _keysMap: {
    nextCursor: "next_cursor",
    previousCursor: "previous_cursor",
  },
});
