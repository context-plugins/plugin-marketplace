import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status for the updated test set. */
export const Status2 = {
  Importing: "Importing",
  PendingAnnotation: "PendingAnnotation",
  Deleting: "Deleting",
  ValidationError: "ValidationError",
  Ready: "Ready",
} as const;
export type Status2 = (typeof Status2)[keyof typeof Status2] | (string & {});

export const status2Schema: EnumSchema<Status2> = s.enumOf<Status2>(Status2);
