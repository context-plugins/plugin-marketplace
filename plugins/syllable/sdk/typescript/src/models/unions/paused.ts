import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether the batch is on HOLD. When on HOLD, no outreach will be made. */
export type Paused = boolean;

export const pausedSchema: Schema<Paused> = s.of<Paused>(s.union([s.boolean()]));
