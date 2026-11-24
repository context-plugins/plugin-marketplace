import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CodeStayingDataApi = {
  MissingParameter: "missing_parameter",
  InvalidParameter: "invalid_parameter",
  InvalidDateRange: "invalid_date_range",
  DateInPast: "date_in_past",
  ChildAgesMismatch: "child_ages_mismatch",
  StayTooLong: "stay_too_long",
  WindowTooLong: "window_too_long",
  InvalidListingUrl: "invalid_listing_url",
  InvalidPropertyType: "invalid_property_type",
  InvalidAmenity: "invalid_amenity",
  InvalidPriceRange: "invalid_price_range",
  InvalidLanguage: "invalid_language",
  InvalidSort: "invalid_sort",
  InvalidCursor: "invalid_cursor",
  LimitOutOfRange: "limit_out_of_range",
  MutuallyExclusiveParams: "mutually_exclusive_params",
  PlatformNotEnabled: "platform_not_enabled",
  NoEnabledPlatform: "no_enabled_platform",
  NeedsCountry: "needs_country",
  MissingApiKey: "missing_api_key",
  InvalidApiKey: "invalid_api_key",
  RevokedApiKey: "revoked_api_key",
  ScopeInsufficient: "scope_insufficient",
  EmailUnverified: "email_unverified",
  SubscriptionRequired: "subscription_required",
  ListingNotFound: "listing_not_found",
  JobNotFound: "job_not_found",
  IdentityMismatch: "identity_mismatch",
  CreditBalanceTooLow: "credit_balance_too_low",
  RateLimitExceeded: "rate_limit_exceeded",
  AllActorsFailed: "all_actors_failed",
  ActorBlocked: "actor_blocked",
  UpstreamDegraded: "upstream_degraded",
  ActorTimeout: "actor_timeout",
  InternalError: "internal_error",
} as const;
export type CodeStayingDataApi = (typeof CodeStayingDataApi)[keyof typeof CodeStayingDataApi] | (string & {});

export const codeStayingDataApiSchema: EnumSchema<CodeStayingDataApi> =
  s.enumOf<CodeStayingDataApi>(CodeStayingDataApi);
