import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the document classifier. If the status is TRAINED the classifier is ready to use.
 * If the status is TRAINED_WITH_WARNINGS the classifier training succeeded, but you should review
 * the warnings returned in the CreateDocumentClassifier response. If the status is FAILED you can
 * see additional information about why the classifier wasn't trained in the Message field.
 */
export const Status2 = {
  Submitted: "SUBMITTED",
  Training: "TRAINING",
  Deleting: "DELETING",
  StopRequested: "STOP_REQUESTED",
  Stopped: "STOPPED",
  InError: "IN_ERROR",
  Trained: "TRAINED",
  TrainedWithWarning: "TRAINED_WITH_WARNING",
} as const;
export type Status2 = (typeof Status2)[keyof typeof Status2] | (string & {});

export const status2Schema: EnumSchema<Status2> = s.enumOf<Status2>(Status2);
