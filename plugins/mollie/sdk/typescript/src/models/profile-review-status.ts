import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the requested changes. */
export const ProfileReviewStatus = {
  Pending: "pending",
  Rejected: "rejected",
} as const;
export type ProfileReviewStatus =
  | (typeof ProfileReviewStatus)[keyof typeof ProfileReviewStatus]
  | (string & {});

export const profileReviewStatusSchema: EnumSchema<ProfileReviewStatus> =
  s.enumOf<ProfileReviewStatus>(ProfileReviewStatus);
