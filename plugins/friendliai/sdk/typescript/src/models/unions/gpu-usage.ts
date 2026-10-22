import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Total GPU time in seconds by GPU type, across both on-demand and reserved capacity. Missing keys
 * mean zero. With `group_by=user_id`, usage is attributed to the user who created the endpoint.
 */
export type GpuUsage = Record<string, number>;

export const gpuUsageSchema: Schema<GpuUsage> = s.of<GpuUsage>(s.union([s.record(s.string(), s.int())]));
