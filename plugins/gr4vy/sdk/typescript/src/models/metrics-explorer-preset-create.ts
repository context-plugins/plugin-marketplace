import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  metricsExplorerFiltersQueryParams1Schema,
  type MetricsExplorerFiltersQueryParams1,
} from "./metrics-explorer-filters-query-params1.js";
import { metricsExplorerMetric1Schema, type MetricsExplorerMetric1 } from "./metrics-explorer-metric1.js";

export type MetricsExplorerPresetCreate = {
  /** The display name for the preset. */
  displayName: string;
  /** The metric to calculate. */
  metric: MetricsExplorerMetric1;
  /** The filters to apply on data. */
  filters: MetricsExplorerFiltersQueryParams1;
};

export const metricsExplorerPresetCreateSchema: Schema<MetricsExplorerPresetCreate> =
  s.object<MetricsExplorerPresetCreate>({
    displayName: s.string(),
    metric: metricsExplorerMetric1Schema,
    filters: metricsExplorerFiltersQueryParams1Schema,
    _keysMap: {
      displayName: "display_name",
    },
  });
