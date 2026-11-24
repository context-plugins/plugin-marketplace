import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the deletion operation. */
export const StatusAmazonRekognitionProjectVersionApi = {
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
export type StatusAmazonRekognitionProjectVersionApi =
  | (typeof StatusAmazonRekognitionProjectVersionApi)[keyof typeof StatusAmazonRekognitionProjectVersionApi]
  | (string & {});

export const statusAmazonRekognitionProjectVersionApiSchema: EnumSchema<StatusAmazonRekognitionProjectVersionApi> =
  s.enumOf<StatusAmazonRekognitionProjectVersionApi>(StatusAmazonRekognitionProjectVersionApi);
