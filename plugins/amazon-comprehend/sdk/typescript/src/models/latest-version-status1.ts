import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Provides the status of the latest entity recognizer version. */
export const LatestVersionStatus1 = {
  Submitted: "SUBMITTED",
  Training: "TRAINING",
  Deleting: "DELETING",
  StopRequested: "STOP_REQUESTED",
  Stopped: "STOPPED",
  InError: "IN_ERROR",
  Trained: "TRAINED",
  TrainedWithWarning: "TRAINED_WITH_WARNING",
} as const;
export type LatestVersionStatus1 =
  | (typeof LatestVersionStatus1)[keyof typeof LatestVersionStatus1]
  | (string & {});

export const latestVersionStatus1Schema: EnumSchema<LatestVersionStatus1> =
  s.enumOf<LatestVersionStatus1>(LatestVersionStatus1);
