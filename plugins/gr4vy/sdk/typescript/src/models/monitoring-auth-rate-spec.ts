import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Model3, model3Schema } from "./model3.js";
import {
  monitoringAuthRateMetricSpecParams1Schema,
  type MonitoringAuthRateMetricSpecParams1,
} from "./monitoring-auth-rate-metric-spec-params1.js";

export type MonitoringAuthRateSpec = {
  /** The monitoring metric model type. @default Model3.AuthRate */
  model?: Model3;
  /** The parameters for the auth rate monitoring metric model. */
  params: MonitoringAuthRateMetricSpecParams1;
};

export const monitoringAuthRateSpecSchema: Schema<MonitoringAuthRateSpec> = s.object<MonitoringAuthRateSpec>({
  model: s.defaulted(model3Schema, Model3.AuthRate),
  params: monitoringAuthRateMetricSpecParams1Schema,
});
