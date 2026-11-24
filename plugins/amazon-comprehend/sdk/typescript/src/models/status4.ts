import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Provides the status of the entity recognizer. */
export const Status4 = {
  Submitted: "SUBMITTED",
  Training: "TRAINING",
  Deleting: "DELETING",
  StopRequested: "STOP_REQUESTED",
  Stopped: "STOPPED",
  InError: "IN_ERROR",
  Trained: "TRAINED",
  TrainedWithWarning: "TRAINED_WITH_WARNING",
} as const;
export type Status4 = (typeof Status4)[keyof typeof Status4] | (string & {});

export const status4Schema: EnumSchema<Status4> = s.enumOf<Status4>(Status4);
