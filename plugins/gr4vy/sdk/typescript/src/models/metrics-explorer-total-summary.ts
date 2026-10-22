import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { valueSchema, type Value } from "./unions/value.js";

export type MetricsExplorerTotalSummary = {
  value?: Value;
};

export const metricsExplorerTotalSummarySchema: Schema<MetricsExplorerTotalSummary> =
  s.object<MetricsExplorerTotalSummary>({
    value: s.optional(s.lazy(() => valueSchema)),
  });
