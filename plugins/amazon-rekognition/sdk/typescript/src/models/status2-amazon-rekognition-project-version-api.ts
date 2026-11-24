import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current running status of the model. */
export const Status2AmazonRekognitionProjectVersionApi = {
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
export type Status2AmazonRekognitionProjectVersionApi =
  | (typeof Status2AmazonRekognitionProjectVersionApi)[keyof typeof Status2AmazonRekognitionProjectVersionApi]
  | (string & {});

export const status2AmazonRekognitionProjectVersionApiSchema: EnumSchema<Status2AmazonRekognitionProjectVersionApi> =
  s.enumOf<Status2AmazonRekognitionProjectVersionApi>(Status2AmazonRekognitionProjectVersionApi);
