import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The reason of the failure of the authorization request. For more details, see [NO_INTERACTION] in
 * the description of `/auth/authorization` API.
 */
export const Reason = {
  Unknown: "UNKNOWN",
  NotLoggedIn: "NOT_LOGGED_IN",
  MaxAgeNotSupported: "MAX_AGE_NOT_SUPPORTED",
  ExceedsMaxAge: "EXCEEDS_MAX_AGE",
  DifferentSubject: "DIFFERENT_SUBJECT",
  AcrNotSatisfied: "ACR_NOT_SATISFIED",
  Denied: "DENIED",
  ServerError: "SERVER_ERROR",
  NotAuthenticated: "NOT_AUTHENTICATED",
  AccountSelectionRequired: "ACCOUNT_SELECTION_REQUIRED",
  ConsentRequired: "CONSENT_REQUIRED",
  InteractionRequired: "INTERACTION_REQUIRED",
  InvalidTarget: "INVALID_TARGET",
  TemporarilyUnavailable: "TEMPORARILY_UNAVAILABLE",
  InvalidScope: "INVALID_SCOPE",
  UnauthorizedClient: "UNAUTHORIZED_CLIENT",
} as const;
export type Reason = (typeof Reason)[keyof typeof Reason] | (string & {});

export const reasonSchema: EnumSchema<Reason> = s.enumOf<Reason>(Reason);
