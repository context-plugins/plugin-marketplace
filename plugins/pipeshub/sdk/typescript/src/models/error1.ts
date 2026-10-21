import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Error code. Common values:
 * - `invalid_request` - Missing or invalid parameter
 * - `invalid_client` - Client authentication failed
 * - `invalid_grant` - Invalid authorization code or refresh token
 * - `unauthorized_client` - Client not authorized for this grant type
 * - `unsupported_grant_type` - Grant type not supported
 * - `invalid_scope` - Requested scope is invalid or exceeds allowed
 * - `access_denied` - User denied authorization
 * - `invalid_target` - The requested subject cannot be acted as (RFC 8693). Returned by the
 *   token-exchange grant for every refusal about the person asked for, with one wording, so a
 *   service token cannot tell "no such person" from "not on your list". The real cause is in the
 *   delegation log.
 */
export const Error1 = {
  InvalidRequest: "invalid_request",
  InvalidClient: "invalid_client",
  InvalidGrant: "invalid_grant",
  InvalidTarget: "invalid_target",
  UnauthorizedClient: "unauthorized_client",
  UnsupportedGrantType: "unsupported_grant_type",
  InvalidScope: "invalid_scope",
  AccessDenied: "access_denied",
  ServerError: "server_error",
} as const;
export type Error1 = (typeof Error1)[keyof typeof Error1] | (string & {});

export const error1Schema: EnumSchema<Error1> = s.enumOf<Error1>(Error1);
