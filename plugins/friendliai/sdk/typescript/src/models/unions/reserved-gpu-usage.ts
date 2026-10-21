import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Reserved GPU time in seconds by GPU type, covered by your reservation during the reservation
 * period. Included in `gpu_usage`; do not add them together. Missing keys mean zero. Usage is
 * reported per endpoint, but which endpoints consume reserved GPU time is determined automatically
 * and cannot be configured. With group_by=user_id, usage is attributed to the user who created the
 * endpoint.
 */
export type ReservedGpuUsage = Record<string, number>;

export const reservedGpuUsageSchema: Schema<ReservedGpuUsage> = s.of<ReservedGpuUsage>(
  s.union([s.record(s.string(), s.int())]),
);
