import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  monitoringMetricFilters2Schema,
  type MonitoringMetricFilters2,
} from "./monitoring-metric-filters2.js";

export type MonitoringAuthRateMetricSpecParams = {
  /** The filters to apply on data. */
  filters: MonitoringMetricFilters2;
};

export const monitoringAuthRateMetricSpecParamsSchema: Schema<MonitoringAuthRateMetricSpecParams> =
  s.object<MonitoringAuthRateMetricSpecParams>({
    filters: monitoringMetricFilters2Schema,
  });
