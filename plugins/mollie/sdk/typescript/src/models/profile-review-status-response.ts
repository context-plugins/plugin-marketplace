import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the requested changes. */
export const ProfileReviewStatusResponse = {
  Pending: "pending",
  Rejected: "rejected",
} as const;
export type ProfileReviewStatusResponse =
  | (typeof ProfileReviewStatusResponse)[keyof typeof ProfileReviewStatusResponse]
  | (string & {});

export const profileReviewStatusResponseSchema: EnumSchema<ProfileReviewStatusResponse> =
  s.enumOf<ProfileReviewStatusResponse>(ProfileReviewStatusResponse);
