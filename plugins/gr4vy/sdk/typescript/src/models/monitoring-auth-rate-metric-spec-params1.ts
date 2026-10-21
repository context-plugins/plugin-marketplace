import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  monitoringMetricFilters2Schema,
  type MonitoringMetricFilters2,
} from "./monitoring-metric-filters2.js";

/** The parameters for the auth rate monitoring metric model. */
export type MonitoringAuthRateMetricSpecParams1 = {
  /** The filters to apply on data. */
  filters: MonitoringMetricFilters2;
};

export const monitoringAuthRateMetricSpecParams1Schema: Schema<MonitoringAuthRateMetricSpecParams1> =
  s.object<MonitoringAuthRateMetricSpecParams1>({
    filters: monitoringMetricFilters2Schema,
  });
