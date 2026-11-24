import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the model version. */
export const Status1AmazonRekognitionProjectVersionApi = {
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
export type Status1AmazonRekognitionProjectVersionApi =
  | (typeof Status1AmazonRekognitionProjectVersionApi)[keyof typeof Status1AmazonRekognitionProjectVersionApi]
  | (string & {});

export const status1AmazonRekognitionProjectVersionApiSchema: EnumSchema<Status1AmazonRekognitionProjectVersionApi> =
  s.enumOf<Status1AmazonRekognitionProjectVersionApi>(Status1AmazonRekognitionProjectVersionApi);
