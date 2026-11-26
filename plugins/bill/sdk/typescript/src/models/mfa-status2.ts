import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * MFA status of the organization.
 * * `DISABLED`: MFA is disabled for the organization.
 * * `SETUP`: MFA setup is incomplete. Validate phone to complete MFA setup.
 * * `CHALLENGE`: MFA setup is complete. MFA challenge is required for MFA sign in.
 * * `COMPLETE`: Both MFA setup and MFA sign in steps are complete. The API session is MFA trusted.
 */
export const MfaStatus2 = {
  Disabled: "DISABLED",
  Setup: "SETUP",
  Challenge: "CHALLENGE",
  Complete: "COMPLETE",
  Undefined: "UNDEFINED",
} as const;
export type MfaStatus2 = (typeof MfaStatus2)[keyof typeof MfaStatus2] | (string & {});

export const mfaStatus2Schema: EnumSchema<MfaStatus2> = s.enumOf<MfaStatus2>(MfaStatus2);
