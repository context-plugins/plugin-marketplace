import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1ManageSyncTokensRequestInternalSchema,
  type ApiV1ManageSyncTokensRequest,
} from "../models/api-v1-manage-sync-tokens-request.js";
import {
  apiV1ManageSyncTokensResponseSchema,
  type ApiV1ManageSyncTokensResponse,
} from "../models/api-v1-manage-sync-tokens-response.js";
import {
  apiV1ManageSyncTokensResponse1Schema,
  type ApiV1ManageSyncTokensResponse1,
} from "../models/api-v1-manage-sync-tokens-response1.js";
import {
  apiV1ManageSyncTokensResponse2Schema,
  type ApiV1ManageSyncTokensResponse2,
} from "../models/api-v1-manage-sync-tokens-response2.js";
import {
  apiV1ManageTokensResponseSchema,
  type ApiV1ManageTokensResponse,
} from "../models/api-v1-manage-tokens-response.js";
import {
  apiV1ManageTokensResponse1Schema,
  type ApiV1ManageTokensResponse1,
} from "../models/api-v1-manage-tokens-response1.js";
import { confirmTargetSchema, type ConfirmTarget } from "../models/confirm-target.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

export class Credentials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Mint a form sync token
   *
   * @remarks
   * Mint a stage-only deployment credential. It can stage code-defined schema changes and nothing
   * else: it can never publish, read responses, or manage the workspace. The plaintext is returned
   * EXACTLY ONCE. The token is bound to the human who minted the key; if that account was removed
   * or demoted, minting is refused with 403. Scope: workspace:manage.
   *
   * @returns The minted token, shown once.
   *
   * @throws {@link Credentials.CreateSyncTokenError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSyncToken(
    request: Credentials.CreateSyncTokenRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageSyncTokensResponse1, Credentials.CreateSyncTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/manage/sync-tokens"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1ManageSyncTokensRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1ManageSyncTokensResponse1Schema },
        errorFactory: Credentials.CreateSyncTokenError,
      },
      options,
    );
  }

  /**
   * List connector tokens
   *
   * @remarks
   * Every `fcli_` credential bound to the key's project — CLI logins, Zapier and n8n connectors,
   * and agent handoffs — as metadata only. Bearers are stored as hashes and can never be listed.
   * Tier A. Scope: workspace:manage.
   *
   * @returns The project's connector tokens, newest first.
   *
   * @throws {@link Credentials.ListConnectorTokensError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listConnectorTokens(
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageTokensResponse, Credentials.ListConnectorTokensError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/manage/tokens"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ManageTokensResponseSchema },
        errorFactory: Credentials.ListConnectorTokensError,
      },
      options,
    );
  }

  /**
   * List form sync tokens
   *
   * @remarks
   * The project's `fsync_` deployment credentials, as metadata only — a sync token's plaintext is
   * never persisted. Scope: workspace:manage.
   *
   * @returns The project's sync tokens, newest first.
   *
   * @throws {@link Credentials.ListSyncTokensError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSyncTokens(
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageSyncTokensResponse, Credentials.ListSyncTokensError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/manage/sync-tokens"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1ManageSyncTokensResponseSchema },
        errorFactory: Credentials.ListSyncTokensError,
      },
      options,
    );
  }

  /**
   * Revoke a connector token
   *
   * @remarks
   * Revoke one connector token. Anything using it stops working immediately, so this is destructive
   * (Tier C): `confirm` must equal the token id. An id outside the key's project 404s. Scope:
   * workspace:manage.
   *
   * @returns The token was revoked.
   *
   * @throws {@link Credentials.RevokeConnectorTokenError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  revokeConnectorToken(
    request: Credentials.RevokeConnectorTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageTokensResponse1, Credentials.RevokeConnectorTokenError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/manage/tokens/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: confirmTargetSchema },
      },
      {
        success: { kind: "json", schema: apiV1ManageTokensResponse1Schema },
        errorFactory: Credentials.RevokeConnectorTokenError,
      },
      options,
    );
  }

  /**
   * Revoke a form sync token
   *
   * @remarks
   * Revoke one sync token; deployments using it stop staging. Destructive (Tier C): `confirm` must
   * equal the token id. The delete holds the project's code-sync lock, so an in-flight sync either
   * completes or the revocation wins before it can revalidate its bearer. Scope: workspace:manage.
   *
   * @returns The token was revoked.
   *
   * @throws {@link Credentials.RevokeSyncTokenError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link FilloError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  revokeSyncToken(
    request: Credentials.RevokeSyncTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1ManageSyncTokensResponse2, Credentials.RevokeSyncTokenError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/manage/sync-tokens/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: confirmTargetSchema },
      },
      {
        success: { kind: "json", schema: apiV1ManageSyncTokensResponse2Schema },
        errorFactory: Credentials.RevokeSyncTokenError,
      },
      options,
    );
  }
}

export namespace Credentials {
  export type CreateSyncTokenRequest = {
    body?: ApiV1ManageSyncTokensRequest;
  };

  export class CreateSyncTokenError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSyncTokenError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class ListConnectorTokensError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListConnectorTokensError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class ListSyncTokensError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSyncTokensError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RevokeConnectorTokenRequest = {
    /** A token id from the connector-token listing. */
    id: string;
    body: ConfirmTarget;
  };

  export class RevokeConnectorTokenError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<RevokeConnectorTokenError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RevokeSyncTokenRequest = {
    /** A sync token id from the sync-token listing. */
    id: string;
    body: ConfirmTarget;
  };

  export class RevokeSyncTokenError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Declared<"error7", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<RevokeSyncTokenError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "error6", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error7", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
