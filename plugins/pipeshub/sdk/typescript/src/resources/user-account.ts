import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { authenticateRequestSchema, type AuthenticateRequest } from "../models/authenticate-request.js";
import {
  authenticatedPasswordResetResponseSchema,
  type AuthenticatedPasswordResetResponse,
} from "../models/authenticated-password-reset-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { initAuthRequestSchema, type InitAuthRequest } from "../models/init-auth-request.js";
import { initAuthResponseSchema, type InitAuthResponse } from "../models/init-auth-response.js";
import {
  rateLimitErrorResponseSchema,
  type RateLimitErrorResponse,
} from "../models/rate-limit-error-response.js";
import { refreshTokenResponseSchema, type RefreshTokenResponse } from "../models/refresh-token-response.js";
import {
  authenticateResponseSchema,
  type AuthenticateResponse,
} from "../models/unions/authenticate-response.js";
import {
  userAccountPasswordResetRequestSchema,
  type UserAccountPasswordResetRequest,
} from "../models/user-account-password-reset-request.js";
import type { Servers } from "../servers.js";

/**
 * User authentication including multi-step MFA, password reset, OTP login, and token management
 */
export class UserAccount {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Authenticate user with credentials
   *
   * @remarks
   * Authenticate a user using the specified method and credentials. Requires a valid session token
   * from `/initAuth`.
   *
   * **Credential Formats by Method:**
   *
   * - `password`: `{ "credentials": { "password": "your-password" } }`
   * - `otp`: `{ "credentials": { "otp": "123456" } }` (6-digit code, valid for 10 minutes)
   * - `google`: `{ "credentials": "google-id-token-string" }`
   * - `microsoft`: `{ "credentials": { "accessToken": "...", "idToken": "..." } }`
   * - `azureAd`: `{ "credentials": { "accessToken": "...", "idToken": "..." } }`
   * - `oauth`: `{ "credentials": { "accessToken": "...", "idToken": "..." } }`
   * - `samlSso`: not accepted here; this endpoint answers `400`. SAML sign-in runs as a browser
   *   redirect: send the browser to `/saml/signIn` instead
   *
   * **Multi-Step Response:**
   *
   * If organization uses MFA, successful authentication returns:
   * - `status: "success"` with `nextStep` and `allowedMethods` for next step
   *
   * **Fully Authenticated Response:**
   *
   * After completing all steps:
   * - `message: "Fully authenticated"` with `accessToken` (1hr) and `refreshToken` (7d)
   *
   * **Security:**
   *
   * - Account locks for 24 hours after 5 consecutive failed attempts, and the owner is sent an
   *   email saying so. While it is locked, sign-in is refused with the same answer as a wrong
   *   password or code, even when the password or code is right
   * - CAPTCHA may be required if enabled (pass `cf-turnstile-response`)
   * - An email with no account gets the same status and message as a real account given a wrong
   *   password (`400`) or a wrong, missing or expired sign-in code (`401`)
   *
   * @returns Authentication step successful or fully authenticated
   *
   * @throws {@link UserAccount.AuthenticateError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  authenticate(
    request: UserAccount.AuthenticateRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AuthenticateResponse, UserAccount.AuthenticateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/userAccount/authenticate"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "x-session-token", value: request.xSessionToken, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: authenticateRequestSchema },
      },
      {
        success: { kind: "json", schema: authenticateResponseSchema },
        errorFactory: UserAccount.AuthenticateError,
      },
      options,
    );
  }

  /**
   * Initialize authentication session
   *
   * @remarks
   * Start a server-side authentication session and discover which sign-in methods are configured
   * for the organization. This is the first step in the multi-step login flow.
   *
   * **Request body (optional)**
   *
   * - You may omit the body, send an empty JSON object `{}`, or send `{ "email": "..." }`.
   * - `email` in the body is optional and kept for legacy reasons; omitting it does not prevent
   *   initialization. The web client typically calls this endpoint without a body and sends `email`
   *   on `/authenticate` instead.
   * - When provided, `email` is stored on the session for correlation with subsequent steps.
   *
   * **Flow:**
   *
   * 1. Call this endpoint (optional JSON body as above).
   * 2. Receive a session token in the `x-session-token` response header.
   * 3. Send that token on subsequent `/authenticate` requests (`x-session-token` header).
   * 4. Use `allowedMethods` and `authProviders` from the response to render the login UI.
   *
   * **Session token**
   *
   * - Returned as header `x-session-token`.
   * - Required for `/authenticate` (and related steps) until it expires.
   *
   * **Multi-factor authentication**
   *
   * If the organization has MFA, complete multiple authentication steps; each step may return the
   * next step's allowed methods.
   *
   * @returns Authentication session initialized successfully
   *
   * @throws {@link UserAccount.InitAuthError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  initAuth(
    request: UserAccount.InitAuthRequestParams,
    options?: RequestOptions,
  ): ApiPromise<InitAuthResponse, UserAccount.InitAuthError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/userAccount/initAuth"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => initAuthRequestSchema)) },
      },
      {
        success: { kind: "json", schema: initAuthResponseSchema },
        errorFactory: UserAccount.InitAuthError,
      },
      options,
    );
  }

  /**
   * Refresh access token
   *
   * @remarks
   * Get a new access token using a valid refresh token.
   *
   * **Usage:**
   *
   * - Pass the refresh token as a Bearer token in the Authorization header
   * - Returns a new access token and basic user information
   *
   * **Token Lifetimes:**
   *
   * - Access token: 24 hours (configurable via `ACCESS_TOKEN_EXPIRY` environment variable)
   * - Refresh token: 30 days (configurable via `REFRESH_TOKEN_EXPIRY` environment variable)
   *
   * **Best Practices:**
   *
   * - Call this endpoint before the access token expires
   * - Store the new access token and continue using it for authenticated requests
   * - If refresh fails with 401, redirect user to login flow
   *
   * @returns Token refreshed successfully
   *
   * @throws {@link UserAccount.RefreshTokenError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  refreshToken(options?: RequestOptions): ApiPromise<RefreshTokenResponse, UserAccount.RefreshTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/userAccount/refresh/token"),
        auth: this.#auth.scopedToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: refreshTokenResponseSchema },
        errorFactory: UserAccount.RefreshTokenError,
      },
      options,
    );
  }

  /**
   * Reset password
   *
   * @remarks
   * Reset the password for the currently authenticated user.
   *
   * **Overview:**
   *
   * Allows a logged-in user to change their password by providing the current password and a new
   * password.
   *
   * @returns Password reset successfully - returns new access token
   *
   * @throws {@link UserAccount.ResetPasswordError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resetPassword(
    request: UserAccount.ResetPasswordRequest,
    options?: RequestOptions,
  ): ApiPromise<AuthenticatedPasswordResetResponse, UserAccount.ResetPasswordError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/userAccount/password/reset"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: userAccountPasswordResetRequestSchema },
      },
      {
        success: { kind: "json", schema: authenticatedPasswordResetResponseSchema },
        errorFactory: UserAccount.ResetPasswordError,
      },
      options,
    );
  }
}

export namespace UserAccount {
  export type AuthenticateRequestParams = {
    /** Session token received from `/initAuth` endpoint */
    xSessionToken: string;
    /** Request payload */
    body: AuthenticateRequest;
  };

  export class AuthenticateError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"rateLimitErrorResponse", RateLimitErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<AuthenticateError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      {
        on: 429,
        kind: "rateLimitErrorResponse",
        decode: { kind: "json", schema: rateLimitErrorResponseSchema },
      },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type InitAuthRequestParams = {
    /**
     * Optional. Omit entirely or send `{}`. You may include `email` for legacy compatibility
     * (pre-fills the session); invalid `email` format is rejected when the field is present.
     */
    body?: InitAuthRequest;
  };

  export class InitAuthError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"rateLimitErrorResponse", RateLimitErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<InitAuthError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      {
        on: 429,
        kind: "rateLimitErrorResponse",
        decode: { kind: "json", schema: rateLimitErrorResponseSchema },
      },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class RefreshTokenError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<RefreshTokenError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ResetPasswordRequest = {
    /** Request payload */
    body: UserAccountPasswordResetRequest;
  };

  export class ResetPasswordError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"rateLimitErrorResponse", RateLimitErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResetPasswordError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      {
        on: 429,
        kind: "rateLimitErrorResponse",
        decode: { kind: "json", schema: rateLimitErrorResponseSchema },
      },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
