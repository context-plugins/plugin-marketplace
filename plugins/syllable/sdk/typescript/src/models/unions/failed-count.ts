import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Number of workflow executions currently in FAILED status */
export type FailedCount = number;

export const failedCountSchema: Schema<FailedCount> = s.of<FailedCount>(s.union([s.int()]));
