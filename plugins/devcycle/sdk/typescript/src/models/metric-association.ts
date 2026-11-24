import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  featureDevCycleManagementMetricAssociationsApiInternalSchema,
  featureDevCycleManagementMetricAssociationsApiSchema,
  type FeatureDevCycleManagementMetricAssociationsApi,
} from "./feature-dev-cycle-management-metric-associations-api.js";
import { metricInternalSchema, metricSchema, type Metric } from "./metric.js";

export type MetricAssociation = {
  project: string;
  feature: FeatureDevCycleManagementMetricAssociationsApi;
  metric: Metric;
  createdAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const metricAssociationProperties: s.Shape<MetricAssociation> = {
  project: s.string(),
  feature: featureDevCycleManagementMetricAssociationsApiInternalSchema,
  metric: metricInternalSchema,
  createdAt: s.dateTime(),
  _keysMap: {
    project: "_project",
  },
};

export const metricAssociationInternalSchema: Schema<MetricAssociation> = s.object<MetricAssociation>(
  metricAssociationProperties,
  { additionalProperties: s.json() },
);

export const metricAssociationSchema: Schema<MetricAssociation> = s.lazySchema(() =>
  s.object<MetricAssociation>(
    {
      ...metricAssociationProperties,
      feature: featureDevCycleManagementMetricAssociationsApiSchema,
      metric: metricSchema,
    },
    { additionalProperties: s.json() },
  ),
);
