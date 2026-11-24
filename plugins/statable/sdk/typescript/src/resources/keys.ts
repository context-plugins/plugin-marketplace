import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiKeyEventListSchema, type ApiKeyEventList } from "../models/api-key-event-list.js";
import { apiKeyListSchema, type ApiKeyList } from "../models/api-key-list.js";
import {
  createApiKeyRequestInternalSchema,
  type CreateApiKeyRequest,
} from "../models/create-api-key-request.js";
import { createdApiKeySchema, type CreatedApiKey } from "../models/created-api-key.js";
import { errorInternalSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Manage API keys (write surface). Requires the `keys:manage` scope and the server-side
 * `API_WRITE_ENABLED` flag; while the flag is off every route here answers 404 `write_disabled`.
 * See docs/api-v1-write-surface.md.
 */
export class Keys {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an API key
   *
   * @remarks
   * Mints a key and returns its raw token EXACTLY ONCE. The requested scopes must be a subset of
   * the authenticating key's scopes (else 403 `scope_escalation`), and a single-site key may only
   * create keys locked to its own site (else 403 `key_not_scoped`). `expires_in_days` defaults to
   * 90 and is capped at 365 — unlike the dashboard, the API cannot mint a key that never expires.
   * Max 10 active keys per account.
   *
   * @returns The created key, including the one-time raw token.
   *
   * @throws {@link Keys.CreateApiKeyError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createApiKey(
    request: Keys.CreateApiKeyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreatedApiKey, Keys.CreateApiKeyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/keys"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createApiKeyRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: createdApiKeySchema },
        errorFactory: Keys.CreateApiKeyError,
      },
      options,
    );
  }

  /**
   * The key's lifecycle audit trail
   *
   * @remarks
   * Returns the key's create / rotate / revoke events, newest first (revoked keys keep their
   * trail). `actor_key_id` names the API key that performed the action, or null when it was done
   * from the dashboard.
   *
   * @returns The key's audit trail.
   *
   * @throws {@link Keys.ListApiKeyEventsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listApiKeyEvents(
    request: Keys.ListApiKeyEventsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiKeyEventList, Keys.ListApiKeyEventsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/keys/{id}/events"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiKeyEventListSchema },
        errorFactory: Keys.ListApiKeyEventsError,
      },
      options,
    );
  }

  /**
   * List the account's active API keys
   *
   * @remarks
   * Returns the owner's active (non-revoked) keys, newest first. No token or hash is ever returned
   * here — the raw token exists only in the create and rotate responses.
   *
   * @returns The account's active keys.
   *
   * @throws {@link Keys.ListApiKeysError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listApiKeys(options?: RequestOptions): ApiPromise<ApiKeyList, Keys.ListApiKeysError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/keys"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiKeyListSchema },
        errorFactory: Keys.ListApiKeysError,
      },
      options,
    );
  }

  /**
   * Revoke an API key
   *
   * @remarks
   * Revokes the key; its token stops authenticating immediately. A key cannot revoke itself (409
   * `self_modification`).
   *
   * @returns Revoked.
   *
   * @throws {@link Keys.RevokeApiKeyError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  revokeApiKey(
    request: Keys.RevokeApiKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Keys.RevokeApiKeyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/keys/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Keys.RevokeApiKeyError,
      },
      options,
    );
  }

  /**
   * Issue a fresh secret for an API key
   *
   * @remarks
   * Replaces the key's secret in place — same id, name, site scope, scopes and expiry — and
   * invalidates the old token immediately. The new token is returned exactly once. No request body.
   * A key cannot rotate itself (409 `self_modification`).
   *
   * @returns The rotated key, including the one-time raw token.
   *
   * @throws {@link Keys.RotateApiKeyError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link StatableError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  rotateApiKey(
    request: Keys.RotateApiKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<CreatedApiKey, Keys.RotateApiKeyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/keys/{id}/rotate"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: createdApiKeySchema },
        errorFactory: Keys.RotateApiKeyError,
      },
      options,
    );
  }
}

export namespace Keys {
  export type CreateApiKeyRequestParams = {
    body: CreateApiKeyRequest;
  };

  export class CreateApiKeyError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateApiKeyError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type ListApiKeyEventsRequest = {
    /** Numeric API key id (from GET /keys). */
    id: number;
  };

  export class ListApiKeyEventsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListApiKeyEventsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export class ListApiKeysError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListApiKeysError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type RevokeApiKeyRequest = {
    /** Numeric API key id (from GET /keys). */
    id: number;
  };

  export class RevokeApiKeyError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<RevokeApiKeyError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 409, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type RotateApiKeyRequest = {
    /** Numeric API key id (from GET /keys). */
    id: number;
  };

  export class RotateApiKeyError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<RotateApiKeyError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 409, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }
}
