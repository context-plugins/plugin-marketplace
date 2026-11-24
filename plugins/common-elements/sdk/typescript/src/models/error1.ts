import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Stable machine-readable code. Switch on this, not on the message. */
export const Error1 = {
  ValidationError: "validation_error",
  InvalidApiKey: "invalid_api_key",
  ScopeNotAllowed: "scope_not_allowed",
  TierNotAllowed: "tier_not_allowed",
  NotFound: "not_found",
  QuotaExceeded: "quota_exceeded",
  PublicRecordAllowanceExceeded: "public_record_allowance_exceeded",
  NotImplemented: "not_implemented",
  SearchTimeout: "search_timeout",
  InternalError: "internal_error",
  ServiceUnavailable: "service_unavailable",
} as const;
export type Error1 = (typeof Error1)[keyof typeof Error1] | (string & {});

export const error1Schema: EnumSchema<Error1> = s.enumOf<Error1>(Error1);
