import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { atifMetricsInternalSchema, atifMetricsSchema, type AtifMetrics } from "../atif-metrics.js";

export type MetricsHudPlatformJobsApi = AtifMetrics;

export const metricsHudPlatformJobsApiInternalSchema: Schema<MetricsHudPlatformJobsApi> =
  s.of<MetricsHudPlatformJobsApi>(s.union([s.lazy(() => atifMetricsInternalSchema)]));

export const metricsHudPlatformJobsApiSchema: Schema<MetricsHudPlatformJobsApi> = s.lazySchema(() =>
  s.of<MetricsHudPlatformJobsApi>(s.union([s.lazy(() => atifMetricsSchema)])),
);
