import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { healthySchema, type Healthy } from "./unions/healthy.js";
import { value3Schema, type Value3 } from "./unions/value3.js";

export type MonitoringSample = {
  /** The date and time when the sample was taken. */
  timestamp: Date;
  /** The value of the sampled monitoring metric. */
  value: Value3;
  /** Indicates whether the sample value is healthy. */
  healthy: Healthy;
  /** Indicates whether the sample is related to an incident. */
  incidentRelated: boolean;
};

export const monitoringSampleSchema: Schema<MonitoringSample> = s.object<MonitoringSample>({
  timestamp: s.dateTime(),
  value: value3Schema,
  healthy: healthySchema,
  incidentRelated: s.boolean(),
  _keysMap: {
    incidentRelated: "incident_related",
  },
});
