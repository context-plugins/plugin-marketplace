import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { channelDoiTSignupApiSchema, type ChannelDoiTSignupApi } from "./channel-doi-tsignup-api.js";
import { reasonDoiTSignupApiSchema, type ReasonDoiTSignupApi } from "./reason-doi-tsignup-api.js";
import { signupVerificationSchema, type SignupVerification } from "./signup-verification.js";
import { statusDoiTSignupApiSchema, type StatusDoiTSignupApi } from "./status-doi-tsignup-api.js";

/**
 * Redacted public view of a signup request. Never includes the admin email, the verification code
 * or the idempotency key.
 */
export type SignupRequest = {
  /** Public request id (sr_ prefix); an unguessable capability. */
  id: string;
  status: StatusDoiTSignupApi;
  channel?: ChannelDoiTSignupApi;
  /** Company name supplied at signup; shown on the console verification and completion pages. */
  companyName?: string;
  /** Page where the organization's admin verifies the request (pending_consent only). */
  consentUrl?: string;
  /**
   * Returned once, by the verifySignupRequest call that performed the verification. Redeem it with
   * createSignupSession after the request is completed.
   */
  activationToken?: string;
  /** Present while the request awaits the emailed code. */
  verification?: SignupVerification;
  /** When an unverified request expires (pending_consent only). */
  expiresAt?: Date;
  /** Suggested polling interval while the request is not terminal. */
  pollAfterSeconds?: number;
  /** The provisioned tenant (completed only). */
  customerId?: string;
  consoleUrl?: string;
  /** Page where the admin signs into the new tenant (completed only). */
  signInUrl?: string;
  /** Trial tier name (trial). */
  tier?: string;
  trialEndDate?: Date;
  nextSteps?: string[];
  /** Why a terminal request did not complete. */
  reason?: ReasonDoiTSignupApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const signupRequestProperties: s.Shape<SignupRequest> = {
  id: s.string(),
  status: statusDoiTSignupApiSchema,
  channel: s.optional(s.lazy(() => channelDoiTSignupApiSchema)),
  companyName: s.optional(s.string()),
  consentUrl: s.optional(s.string()),
  activationToken: s.optional(s.string()),
  verification: s.optional(s.lazy(() => signupVerificationSchema)),
  expiresAt: s.optional(s.dateTime()),
  pollAfterSeconds: s.optional(s.int()),
  customerId: s.optional(s.string()),
  consoleUrl: s.optional(s.string()),
  signInUrl: s.optional(s.string()),
  tier: s.optional(s.string()),
  trialEndDate: s.optional(s.dateTime()),
  nextSteps: s.optional(s.array(s.string())),
  reason: s.optional(s.lazy(() => reasonDoiTSignupApiSchema)),
};

export const signupRequestInternalSchema: Schema<SignupRequest> = s.object<SignupRequest>(
  signupRequestProperties,
  { additionalProperties: s.json() },
);

export const signupRequestSchema: Schema<SignupRequest> = s.lazySchema(() =>
  s.object<SignupRequest>(
    {
      ...signupRequestProperties,
      consentUrl: s.optional(s.string().check(s.url())),
      consoleUrl: s.optional(s.string().check(s.url())),
      signInUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
