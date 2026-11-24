import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiErrorBodySchema, type ApiErrorBody } from "../models/api-error-body.js";
import { apiKeyUsageSchema, type ApiKeyUsage } from "../models/api-key-usage.js";
import { apiKeySchema, type ApiKey } from "../models/api-key.js";
import { createApiKeySchema, type CreateApiKey } from "../models/create-api-key.js";
import type { Servers } from "../servers.js";

/**
 * Create and manage API keys for programmatic access
 */
export class ApiKeys {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a key's recent usage
   *
   * @remarks
   * Returns how many requests authenticated with this key over the trailing 30 days. Pair with
   * `last_used` / `last_used_ip` from the list endpoint to audit a credential before revoking or
   * rotating it.
   *
   * Accepts either a session cookie or an existing API key as auth.
   *
   * @returns Usage over the trailing 30-day window
   *
   * @throws {@link ApiKeys.ApiKeyUsageError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  apiKeyUsage(
    request: ApiKeys.ApiKeyUsageRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiKeyUsage, ApiKeys.ApiKeyUsageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/keys/{id}/usage"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiKeyUsageSchema },
        errorFactory: ApiKeys.ApiKeyUsageError,
      },
      options,
    );
  }

  /**
   * Create a new API key
   *
   * @remarks
   * Generates a new workspace-scoped API key. The full `key_value` is returned **only** in this
   * response — Audioscrape stores a SHA-256 hash and the prefix only, so save the raw key
   * immediately on the client side. If you lose it, rotate the key.
   *
   * Accepts either a session cookie or an existing API key as auth.
   *
   * @returns Key created. `key_value` is shown in full here for the only time.
   *
   * @throws {@link ApiKeys.CreateApiKeyError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createApiKey(
    request: ApiKeys.CreateApiKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiKey, ApiKeys.CreateApiKeyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/keys"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createApiKeySchema },
      },
      {
        success: { kind: "json", schema: apiKeySchema },
        errorFactory: ApiKeys.CreateApiKeyError,
      },
      options,
    );
  }

  /**
   * Delete an API key
   *
   * @remarks
   * Revokes the key immediately. Any in-flight requests using the revoked key will fail with 401 on
   * their next call.
   *
   * Accepts either a session cookie or an existing API key as auth.
   *
   * @returns Key deleted (idempotent — succeeds even if already absent)
   *
   * @throws {@link ApiKeys.DeleteApiKeyError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteApiKey(
    request: ApiKeys.DeleteApiKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiKeys.DeleteApiKeyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/keys/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiKeys.DeleteApiKeyError,
      },
      options,
    );
  }

  /**
   * List your API keys
   *
   * @remarks
   * Returns all API keys belonging to the calling user. `key_value` is `null` on every entry — only
   * the display `key_prefix` is recoverable after creation. To get a fresh raw value for a key,
   * rotate it: `POST /api/keys/{id}/rotate`.
   *
   * Accepts either a session cookie or an existing API key as auth.
   *
   * @returns All API keys for the calling user
   *
   * @throws {@link ApiKeys.ListApiKeysError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listApiKeys(options?: RequestOptions): ApiPromise<ApiKey[], ApiKeys.ListApiKeysError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/keys"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => apiKeySchema)) },
        errorFactory: ApiKeys.ListApiKeysError,
      },
      options,
    );
  }

  /**
   * Rotate an API key
   *
   * @remarks
   * Atomically replaces the key's secret (GH#485): the key keeps its id, name, workspace pin and
   * expiry; the old secret stops authenticating the moment this call returns; the new secret is in
   * `key_value` — shown only in this response. Prefer this over delete-and-recreate: the key's
   * identity survives and there is no window with zero valid credentials. `last_used` resets to
   * `null` because the new secret has never been used.
   *
   * Accepts either a session cookie or an existing API key as auth. A key can rotate itself.
   *
   * @returns Key rotated. `key_value` holds the NEW secret, shown in full here for the only time.
   *
   * @throws {@link ApiKeys.RotateApiKeyError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link AudioscrapeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  rotateApiKey(
    request: ApiKeys.RotateApiKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiKey, ApiKeys.RotateApiKeyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/keys/{id}/rotate"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiKeySchema },
        errorFactory: ApiKeys.RotateApiKeyError,
      },
      options,
    );
  }
}

export namespace ApiKeys {
  export type ApiKeyUsageRequest = {
    /** API key ID (from the `id` field on create / list) */
    id: number;
  };

  export class ApiKeyUsageError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorBody", ApiErrorBody>
      | Declared<"apiErrorBody2", ApiErrorBody>
      | Undeclared;

    static readonly errors: ErrorDecoders<ApiKeyUsageError> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 404, kind: "apiErrorBody2", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }

  export type CreateApiKeyRequest = {
    body: CreateApiKey;
  };

  export class CreateApiKeyError extends ApiError {
    declare readonly payload: Declared<"apiErrorBody", ApiErrorBody> | Undeclared;

    static readonly errors: ErrorDecoders<CreateApiKeyError> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }

  export type DeleteApiKeyRequest = {
    /** API key ID (from the `id` field on create / list) */
    id: number;
  };

  export class DeleteApiKeyError extends ApiError {
    declare readonly payload: Declared<"apiErrorBody", ApiErrorBody> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteApiKeyError> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }

  export class ListApiKeysError extends ApiError {
    declare readonly payload: Declared<"apiErrorBody", ApiErrorBody> | Undeclared;

    static readonly errors: ErrorDecoders<ListApiKeysError> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }

  export type RotateApiKeyRequest = {
    /** API key ID (from the `id` field on create / list) */
    id: number;
  };

  export class RotateApiKeyError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorBody", ApiErrorBody>
      | Declared<"apiErrorBody2", ApiErrorBody>
      | Undeclared;

    static readonly errors: ErrorDecoders<RotateApiKeyError> = [
      { on: 401, kind: "apiErrorBody", decode: { kind: "json", schema: apiErrorBodySchema } },
      { on: 404, kind: "apiErrorBody2", decode: { kind: "json", schema: apiErrorBodySchema } },
    ];
  }
}
