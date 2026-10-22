import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Number of calls in the workflow queue (pending or processing) */
export type QueueCount = number;

export const queueCountSchema: Schema<QueueCount> = s.of<QueueCount>(s.union([s.int()]));
