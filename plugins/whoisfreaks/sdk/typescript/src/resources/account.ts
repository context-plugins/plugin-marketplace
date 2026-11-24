import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { accountUsageResponseSchema, type AccountUsageResponse } from "../models/account-usage-response.js";
import { databaseFileStatusSchema, type DatabaseFileStatus } from "../models/database-file-status.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

/**
 * Account, API key, and usage utilities
 */
export class Account {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Account Usage
   *
   * @remarks
   * Account Usage. Returns the file/snapshot described by this operation.
   *
   * @returns Successful response
   *
   * @throws {@link Account.AccountUsageError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  accountUsage(options?: RequestOptions): ApiPromise<AccountUsageResponse, Account.AccountUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1.0/whoisapi/usage"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountUsageResponseSchema },
        errorFactory: Account.AccountUsageError,
      },
      options,
    );
  }

  /**
   * Database File Status (Public)
   *
   * @remarks
   * No API key required. Returns freshness of all downloadable files.
   *
   * @returns Successful response
   *
   * @throws {@link Account.DatabaseFileStatusError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  databaseFileStatus(
    options?: RequestOptions,
  ): ApiPromise<DatabaseFileStatus, Account.DatabaseFileStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.4/status"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: databaseFileStatusSchema },
        errorFactory: Account.DatabaseFileStatusError,
      },
      options,
    );
  }

  /**
   * Rotate API Key
   *
   * @remarks
   * Rotate API Key. Returns the file/snapshot described by this operation.
   *
   * @returns Key rotated
   *
   * @throws {@link Account.RotateApiKeyError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  rotateApiKey(options?: RequestOptions): ApiPromise<string, Account.RotateApiKeyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1.0/api-key/rotate"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "text", schema: s.string() },
        errorFactory: Account.RotateApiKeyError,
      },
      options,
    );
  }
}

export namespace Account {
  export class AccountUsageError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<AccountUsageError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class DatabaseFileStatusError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DatabaseFileStatusError> = [
      { on: 429, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class RotateApiKeyError extends ApiError {
    declare readonly payload: Declared<"error401", string> | Undeclared;

    static readonly errors: ErrorDecoders<RotateApiKeyError> = [
      { on: 401, kind: "error401", decode: { kind: "text", schema: s.string() } },
    ];
  }
}
