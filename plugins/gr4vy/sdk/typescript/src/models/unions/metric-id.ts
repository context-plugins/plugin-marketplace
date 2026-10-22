import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The ID of the monitoring metric that the incident relates to. This value is null if the
 * monitoring metric has been deleted.
 */
export type MetricId = string;

export const metricIdSchema: Schema<MetricId> = s.of<MetricId>(s.union([s.string()]));
