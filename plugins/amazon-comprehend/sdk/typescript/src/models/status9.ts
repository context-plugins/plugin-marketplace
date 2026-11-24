import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of an entity recognizer. */
export const Status9 = {
  Submitted: "SUBMITTED",
  Training: "TRAINING",
  Deleting: "DELETING",
  StopRequested: "STOP_REQUESTED",
  Stopped: "STOPPED",
  InError: "IN_ERROR",
  Trained: "TRAINED",
  TrainedWithWarning: "TRAINED_WITH_WARNING",
} as const;
export type Status9 = (typeof Status9)[keyof typeof Status9] | (string & {});

export const status9Schema: EnumSchema<Status9> = s.enumOf<Status9>(Status9);
