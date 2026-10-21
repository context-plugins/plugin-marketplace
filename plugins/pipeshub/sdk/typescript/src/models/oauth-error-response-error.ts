import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error1Schema, type Error1 } from "./error1.js";

/** OAuth 2.0 Error Response (RFC 6749 Section 5.2). Standard error format for OAuth endpoints. */
export type OAuthErrorResponseError = {
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
  error: Error1;
  /** Human-readable error description */
  errorDescription?: string;
  /** URI with more information about the error */
  errorUri?: string;
  /** State parameter from the authorization request */
  state?: string;
};

export const oAuthErrorResponseErrorSchema: Schema<OAuthErrorResponseError> =
  s.object<OAuthErrorResponseError>({
    error: error1Schema,
    errorDescription: s.optional(s.string()),
    errorUri: s.optional(s.string()),
    state: s.optional(s.string()),
    _keysMap: {
      errorDescription: "error_description",
      errorUri: "error_uri",
    },
  });
