import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Provides the status of the latest document classifier version. */
export const LatestVersionStatus = {
  Submitted: "SUBMITTED",
  Training: "TRAINING",
  Deleting: "DELETING",
  StopRequested: "STOP_REQUESTED",
  Stopped: "STOPPED",
  InError: "IN_ERROR",
  Trained: "TRAINED",
  TrainedWithWarning: "TRAINED_WITH_WARNING",
} as const;
export type LatestVersionStatus =
  | (typeof LatestVersionStatus)[keyof typeof LatestVersionStatus]
  | (string & {});

export const latestVersionStatusSchema: EnumSchema<LatestVersionStatus> =
  s.enumOf<LatestVersionStatus>(LatestVersionStatus);
