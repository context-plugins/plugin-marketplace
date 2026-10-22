import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Stable machine-readable error code. */
export const PlatformProblemDetailCode = {
  InvalidRequest: "invalid_request",
  MissingRequiredField: "missing_required_field",
  InvalidParameter: "invalid_parameter",
  InvalidCursor: "invalid_cursor",
  ExpiredCursor: "expired_cursor",
  InvalidFilter: "invalid_filter",
  InvalidDatasource: "invalid_datasource",
  AuthenticationRequired: "authentication_required",
  TokenExpired: "token_expired",
  InsufficientPermissions: "insufficient_permissions",
  SpendLimitExceeded: "spend_limit_exceeded",
  ResourceNotFound: "resource_not_found",
  MethodNotAllowed: "method_not_allowed",
  RequestTimeout: "request_timeout",
  RequestTooLarge: "request_too_large",
  TokenLimitExceeded: "token_limit_exceeded",
  Conflict: "conflict",
  Gone: "gone",
  UnprocessableQuery: "unprocessable_query",
  ToolsUnauthorized: "tools_unauthorized",
  RateLimitExceeded: "rate_limit_exceeded",
  InternalError: "internal_error",
  ServiceUnavailable: "service_unavailable",
} as const;
export type PlatformProblemDetailCode =
  | (typeof PlatformProblemDetailCode)[keyof typeof PlatformProblemDetailCode]
  | (string & {});

export const platformProblemDetailCodeSchema: EnumSchema<PlatformProblemDetailCode> =
  s.enumOf<PlatformProblemDetailCode>(PlatformProblemDetailCode);
