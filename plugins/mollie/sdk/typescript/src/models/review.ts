import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { profileReviewStatusSchema, type ProfileReviewStatus } from "./profile-review-status.js";

/**
 * Present if changes have been made that have not yet been approved by Mollie. Changes to test
 * profiles are approved automatically, unless a switch to a live profile has been requested. The
 * review object will therefore usually be `null` in test mode.
 */
export type Review = {
  /** The status of the requested changes. */
  status?: ProfileReviewStatus;
};

export const reviewSchema: Schema<Review> = s.object<Review>({
  status: s.optional(s.lazy(() => profileReviewStatusSchema)),
});
