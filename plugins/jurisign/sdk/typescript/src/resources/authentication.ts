import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  authSandboxTokenRequestInternalSchema,
  type AuthSandboxTokenRequest,
} from "../models/auth-sandbox-token-request.js";
import {
  authSandboxTokenResponseInternalSchema,
  type AuthSandboxTokenResponse,
} from "../models/auth-sandbox-token-response.js";
import { authTokenRequestInternalSchema, type AuthTokenRequest } from "../models/auth-token-request.js";
import { authTokenResponseInternalSchema, type AuthTokenResponse } from "../models/auth-token-response.js";
import { messageResponseSchema, type MessageResponse } from "../models/message-response.js";
import { responseSchema, type Response } from "../models/response.js";
import { validationError1Schema, type ValidationError1 } from "../models/validation-error1.js";
import type { Servers } from "../servers.js";

/**
 * Obtain and revoke API tokens
 */
export class Authentication {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Sandbox API Token
   *
   * @remarks
   * Authenticate with the same email/password as POST /auth/token, but obtain a sandbox token
   * instead (prefixed sandbox_...). Requests made with this token never send real SMS or emails
   * (SMS are logged, emails go through the log mailer) and never deduct signature credits.
   * Documents and signature requests created in sandbox mode are isolated from your organization's
   * real data: they never appear in a normal (non-sandbox) request, and vice versa. A sandbox token
   * can only be used with the sandbox_ prefix, and a normal token can never be used with it —
   * mixing the two returns 401. Rate limited to 10 attempts per minute for the targeted account,
   * and 60 per minute for the calling IP.
   *
   * @returns Sandbox token created successfully
   *
   * @throws {@link Authentication.CreateSandboxTokenError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSandboxToken(
    request: Authentication.CreateSandboxTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<AuthSandboxTokenResponse, Authentication.CreateSandboxTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/auth/sandbox-token"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: authSandboxTokenRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: authSandboxTokenResponseInternalSchema },
        errorFactory: Authentication.CreateSandboxTokenError,
      },
      options,
    );
  }

  /**
   * Create API Token
   *
   * @remarks
   * Authenticate with email/password to obtain a Bearer token, scoped to your organization. By
   * default the token is granted all 5 available scopes (documents:read, documents:write,
   * sign-requests:read, sign-requests:write, webhooks:manage). Pass `scopes` to request a
   * restricted subset instead — every endpoint checks the token's abilities and returns 403 if the
   * required scope is missing. Rate limited to 10 attempts per minute for the targeted account, and
   * 60 per minute for the calling IP.
   *
   * @returns Token created successfully
   *
   * @throws {@link Authentication.CreateTokenError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createToken(
    request: Authentication.CreateTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<AuthTokenResponse, Authentication.CreateTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/auth/token"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: authTokenRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: authTokenResponseInternalSchema },
        errorFactory: Authentication.CreateTokenError,
      },
      options,
    );
  }

  /**
   * API Status
   *
   * @remarks
   * Returns the current API status and version information.
   *
   * @returns API is operational
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getStatus(options?: RequestOptions): ApiPromise<Response, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: responseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Revoke Current Token
   *
   * @remarks
   * Revoke the Bearer token used in this request.
   *
   * @returns Token revoked
   *
   * @throws {@link Authentication.RevokeTokenError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link JuriSignError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  revokeToken(options?: RequestOptions): ApiPromise<MessageResponse, Authentication.RevokeTokenError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/auth/token"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messageResponseSchema },
        errorFactory: Authentication.RevokeTokenError,
      },
      options,
    );
  }
}

export namespace Authentication {
  export type CreateSandboxTokenRequest = {
    body: AuthSandboxTokenRequest;
  };

  export class CreateSandboxTokenError extends ApiError {
    declare readonly payload:
      | Declared<"messageResponse", MessageResponse>
      | Declared<"validationError1", ValidationError1>
      | Declared<"messageResponse2", MessageResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSandboxTokenError> = [
      { on: 403, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 422, kind: "validationError1", decode: { kind: "json", schema: validationError1Schema } },
      { on: 429, kind: "messageResponse2", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }

  export type CreateTokenRequest = {
    body: AuthTokenRequest;
  };

  export class CreateTokenError extends ApiError {
    declare readonly payload:
      | Declared<"messageResponse", MessageResponse>
      | Declared<"validationError1", ValidationError1>
      | Declared<"messageResponse2", MessageResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateTokenError> = [
      { on: 403, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
      { on: 422, kind: "validationError1", decode: { kind: "json", schema: validationError1Schema } },
      { on: 429, kind: "messageResponse2", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }

  export class RevokeTokenError extends ApiError {
    declare readonly payload: Declared<"messageResponse", MessageResponse> | Undeclared;

    static readonly errors: ErrorDecoders<RevokeTokenError> = [
      { on: 401, kind: "messageResponse", decode: { kind: "json", schema: messageResponseSchema } },
    ];
  }
}
