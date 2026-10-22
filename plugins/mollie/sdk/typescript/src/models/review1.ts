import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  profileReviewStatusResponseSchema,
  type ProfileReviewStatusResponse,
} from "./profile-review-status-response.js";

/**
 * Present if changes have been made that have not yet been approved by Mollie. Changes to test
 * profiles are approved automatically, unless a switch to a live profile has been requested. The
 * review object will therefore usually be `null` in test mode.
 */
export type Review1 = {
  /** The status of the requested changes. */
  status?: ProfileReviewStatusResponse;
};

export const review1Schema: Schema<Review1> = s.object<Review1>({
  status: s.optional(s.lazy(() => profileReviewStatusResponseSchema)),
});
