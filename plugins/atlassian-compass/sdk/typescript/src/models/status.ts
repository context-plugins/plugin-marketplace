import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the pull request. */
export const Status = {
  Created: "CREATED",
  InReview: "IN_REVIEW",
  Merged: "MERGED",
  Rejected: "REJECTED",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
