import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metricsExplorerMetric1Schema, type MetricsExplorerMetric1 } from "./metrics-explorer-metric1.js";
import { metricsExplorerSource2Schema, type MetricsExplorerSource2 } from "./metrics-explorer-source2.js";
import { Type39, type39Schema } from "./type39.js";
import { filtersSchema, type Filters } from "./unions/filters.js";

export type MetricsExplorerPreset = {
  /** Always `metrics-explorer.preset`. @default Type39.MetricsExplorerPreset */
  type?: Type39;
  /** The ID of the preset. */
  id: string;
  /** The ID of the merchant account associated with the preset. */
  merchantAccountId: string;
  /** The date and time when the preset was created. */
  createdAt: Date;
  /** The date and time when the preset was last updated. */
  updatedAt: Date;
  /** The display name for the preset. */
  displayName: string;
  /** The source of the data. */
  source: MetricsExplorerSource2;
  /** The metric to calculate. */
  metric: MetricsExplorerMetric1;
  /** The filters to apply on data. */
  filters: Record<string, Filters>;
};

export const metricsExplorerPresetSchema: Schema<MetricsExplorerPreset> = s.object<MetricsExplorerPreset>({
  type: s.defaulted(type39Schema, Type39.MetricsExplorerPreset),
  id: s.string(),
  merchantAccountId: s.string(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  displayName: s.string(),
  source: metricsExplorerSource2Schema,
  metric: metricsExplorerMetric1Schema,
  filters: s.record(
    s.string(),
    s.lazy(() => filtersSchema),
  ),
  _keysMap: {
    merchantAccountId: "merchant_account_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
    displayName: "display_name",
  },
});
