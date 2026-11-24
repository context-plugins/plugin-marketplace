import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The build status */
export const Status = {
  Retried: "retried",
  Canceled: "canceled",
  InfrastructureFail: "infrastructure_fail",
  Timedout: "timedout",
  NotRun: "not_run",
  Running: "running",
  Failed: "failed",
  Queued: "queued",
  Scheduled: "scheduled",
  NotRunning: "not_running",
  NoTests: "no_tests",
  Fixed: "fixed",
  Success: "success",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
