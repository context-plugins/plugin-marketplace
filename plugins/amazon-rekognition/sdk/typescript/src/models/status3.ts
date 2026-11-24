import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the stop operation. */
export const Status3 = {
  TrainingInProgress: "TRAINING_IN_PROGRESS",
  TrainingCompleted: "TRAINING_COMPLETED",
  TrainingFailed: "TRAINING_FAILED",
  Starting: "STARTING",
  Running: "RUNNING",
  Failed: "FAILED",
  Stopping: "STOPPING",
  Stopped: "STOPPED",
  Deleting: "DELETING",
  CopyingInProgress: "COPYING_IN_PROGRESS",
  CopyingCompleted: "COPYING_COMPLETED",
  CopyingFailed: "COPYING_FAILED",
  Deprecated: "DEPRECATED",
  Expired: "EXPIRED",
} as const;
export type Status3 = (typeof Status3)[keyof typeof Status3] | (string & {});

export const status3Schema: EnumSchema<Status3> = s.enumOf<Status3>(Status3);
