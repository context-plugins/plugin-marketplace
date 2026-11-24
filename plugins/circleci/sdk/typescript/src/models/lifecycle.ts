import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The build lifecycle phase */
export const Lifecycle = {
  Queued: "queued",
  Scheduled: "scheduled",
  NotRun: "not_run",
  NotRunning: "not_running",
  Running: "running",
  Finished: "finished",
} as const;
export type Lifecycle = (typeof Lifecycle)[keyof typeof Lifecycle] | (string & {});

export const lifecycleSchema: EnumSchema<Lifecycle> = s.enumOf<Lifecycle>(Lifecycle);
