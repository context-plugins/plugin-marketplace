import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type = {
  InvalidRequest: "invalid_request",
  AuthenticationError: "authentication_error",
  PermissionDenied: "permission_denied",
  NotFound: "not_found",
  InsufficientCredits: "insufficient_credits",
  RateLimited: "rate_limited",
  UpstreamUnavailable: "upstream_unavailable",
  UpstreamTimeout: "upstream_timeout",
  InternalError: "internal_error",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
