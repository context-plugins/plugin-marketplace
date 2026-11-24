import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Stable machine-readable slug (contract — never changes). The `ambiguous_domain` code is emitted
 * only by the MCP tools (when a `site` domain matches more than one stored site), not by /query.
 */
export const Code = {
  InvalidRequest: "invalid_request",
  MetricsRequired: "metrics_required",
  UnknownMetric: "unknown_metric",
  TooManyDimensions: "too_many_dimensions",
  UnknownDimension: "unknown_dimension",
  InvalidDateRange: "invalid_date_range",
  InvalidInterval: "invalid_interval",
  MetricNotAvailable: "metric_not_available",
  InvalidFilter: "invalid_filter",
  EventFilterRequired: "event_filter_required",
  InvalidCompare: "invalid_compare",
  CompareLengthMismatch: "compare_length_mismatch",
  SiteIdRequired: "site_id_required",
  LimitOffsetMisuse: "limit_offset_misuse",
  Unauthorized: "unauthorized",
  InsufficientScope: "insufficient_scope",
  KeyNotScoped: "key_not_scoped",
  TrackingInactive: "tracking_inactive",
  UnknownSite: "unknown_site",
  UnknownFunnel: "unknown_funnel",
  RateLimited: "rate_limited",
  Internal: "internal",
  AmbiguousDomain: "ambiguous_domain",
  InvalidScope: "invalid_scope",
  ScopeEscalation: "scope_escalation",
  InvalidExpiry: "invalid_expiry",
  KeyLimitReached: "key_limit_reached",
  ApiKeyNotFound: "api_key_not_found",
  SelfModification: "self_modification",
  WriteDisabled: "write_disabled",
  TermsNotAccepted: "terms_not_accepted",
  OtpInvalid: "otp_invalid",
  SiteExists: "site_exists",
  DomainNotAllowed: "domain_not_allowed",
  EmailUndeliverable: "email_undeliverable",
  NotSiteOwner: "not_site_owner",
  IdempotencyConflict: "idempotency_conflict",
  GoalExists: "goal_exists",
  GoalNotFound: "goal_not_found",
  FunnelExists: "funnel_exists",
  HobbyAlwaysPublic: "hobby_always_public",
  NotFound: "not_found",
  MethodNotAllowed: "method_not_allowed",
} as const;
export type Code = (typeof Code)[keyof typeof Code] | (string & {});

export const codeSchema: EnumSchema<Code> = s.enumOf<Code>(Code);
