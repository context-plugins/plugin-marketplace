import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Filters the list of classifiers based on status. */
export const Status7 = {
  Submitted: "SUBMITTED",
  Training: "TRAINING",
  Deleting: "DELETING",
  StopRequested: "STOP_REQUESTED",
  Stopped: "STOPPED",
  InError: "IN_ERROR",
  Trained: "TRAINED",
  TrainedWithWarning: "TRAINED_WITH_WARNING",
} as const;
export type Status7 = (typeof Status7)[keyof typeof Status7] | (string & {});

export const status7Schema: EnumSchema<Status7> = s.enumOf<Status7>(Status7);
