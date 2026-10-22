import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The profile status determines whether the profile is able to receive live payments.
 *
 * * `unverified`: The profile has not been verified yet and can only be used to create test
 *   payments.
 * * `verified`: The profile has been verified and can be used to create live payments and test
 *   payments.
 * * `blocked`: The profile is blocked and can no longer be used or changed.
 */
export const ProfileStatusResponse = {
  Unverified: "unverified",
  Verified: "verified",
  Blocked: "blocked",
} as const;
export type ProfileStatusResponse =
  | (typeof ProfileStatusResponse)[keyof typeof ProfileStatusResponse]
  | (string & {});

export const profileStatusResponseSchema: EnumSchema<ProfileStatusResponse> =
  s.enumOf<ProfileStatusResponse>(ProfileStatusResponse);
