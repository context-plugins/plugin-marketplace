import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authorizeResponseSchema, type AuthorizeResponse } from "../models/authorize-response.js";
import {
  connectionStatusResponseSchema,
  type ConnectionStatusResponse,
} from "../models/connection-status-response.js";
import { disconnectResponseSchema, type DisconnectResponse } from "../models/disconnect-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  integrationCategoryResponseSchema,
  type IntegrationCategoryResponse,
} from "../models/integration-category-response.js";
import {
  integrationListResponseSchema,
  type IntegrationListResponse,
} from "../models/integration-list-response.js";
import { limitInternalSchema, limitSchema, type Limit } from "../models/unions/limit.js";
import { searchSchema, type Search } from "../models/unions/search.js";
import type { Servers } from "../servers.js";

export class Integrations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Authorize Integration
   *
   * @remarks
   * Get the OAuth redirect URL for connecting an integration.
   *
   * The client opens the returned URL in a web auth session and polls
   * `/integrations/{provider}/status` once the flow lands back on the callback path. The URL is
   * Composio-hosted; no redirect URI is registered per client.
   *
   * @returns Successful Response
   *
   * @throws {@link Integrations.AuthorizeIntegrationIntegrationsProviderAuthorizePostError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  authorizeIntegrationIntegrationsProviderAuthorizePost(
    request: Integrations.AuthorizeIntegrationIntegrationsProviderAuthorizePostRequest,
    options?: RequestOptions,
  ): ApiPromise<AuthorizeResponse, Integrations.AuthorizeIntegrationIntegrationsProviderAuthorizePostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/integrations/{provider}/authorize"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "provider", value: request.provider, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: authorizeResponseSchema },
        errorFactory: Integrations.AuthorizeIntegrationIntegrationsProviderAuthorizePostError,
      },
      options,
    );
  }

  /**
   * Disconnect Integration
   *
   * @remarks
   * Disconnect an integration for this project.
   *
   * Deliberately NOT gated like `authorize` above: a restricted project must still be able to tear
   * down a connection it already has.
   *
   * @returns Successful Response
   *
   * @throws {@link Integrations.DisconnectIntegrationIntegrationsProviderDeleteError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  disconnectIntegrationIntegrationsProviderDelete(
    request: Integrations.DisconnectIntegrationIntegrationsProviderDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<DisconnectResponse, Integrations.DisconnectIntegrationIntegrationsProviderDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/integrations/{provider}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "provider", value: request.provider, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: disconnectResponseSchema },
        errorFactory: Integrations.DisconnectIntegrationIntegrationsProviderDeleteError,
      },
      options,
    );
  }

  /**
   * Get Connection Status
   *
   * @remarks
   * Check whether this project has connected a specific provider.
   *
   * Poll this after opening the authorize URL to learn when OAuth completed.
   *
   * @returns Successful Response
   *
   * @throws {@link Integrations.GetConnectionStatusIntegrationsProviderStatusGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getConnectionStatusIntegrationsProviderStatusGet(
    request: Integrations.GetConnectionStatusIntegrationsProviderStatusGetRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ConnectionStatusResponse,
    Integrations.GetConnectionStatusIntegrationsProviderStatusGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/integrations/{provider}/status"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "provider", value: request.provider, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: connectionStatusResponseSchema },
        errorFactory: Integrations.GetConnectionStatusIntegrationsProviderStatusGetError,
      },
      options,
    );
  }

  /**
   * List Categories
   *
   * @remarks
   * Get all integration categories, for filtering the list above.
   *
   * @returns Successful Response
   *
   * @throws {@link Integrations.ListCategoriesIntegrationsCategoriesGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCategoriesIntegrationsCategoriesGet(
    options?: RequestOptions,
  ): ApiPromise<IntegrationCategoryResponse, Integrations.ListCategoriesIntegrationsCategoriesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/integrations/categories"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: integrationCategoryResponseSchema },
        errorFactory: Integrations.ListCategoriesIntegrationsCategoriesGetError,
      },
      options,
    );
  }

  /**
   * List Integrations
   *
   * @remarks
   * List available integrations with this project's connection status.
   *
   * `is_connected` is resolved per integration, so a client can render the whole catalogue and the
   * connected subset from this one call. `connected_only` is what a "my integrations" view reads —
   * including on a restricted project, which cannot connect anything but can still remove what it
   * already has.
   *
   * @returns Successful Response
   *
   * @throws {@link Integrations.ListIntegrationsIntegrationsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link BrowserUseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listIntegrationsIntegrationsGet(
    request: Integrations.ListIntegrationsIntegrationsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<IntegrationListResponse, Integrations.ListIntegrationsIntegrationsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/integrations"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.lazy(() => limitInternalSchema)) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
          { name: "search", value: request.search, schema: s.optional(s.lazy(() => searchSchema)) },
          { name: "popular_only", value: request.popularOnly, schema: s.defaulted(s.boolean(), false) },
          { name: "connected_only", value: request.connectedOnly, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: integrationListResponseSchema },
        errorFactory: Integrations.ListIntegrationsIntegrationsGetError,
      },
      options,
    );
  }
}

export namespace Integrations {
  export type AuthorizeIntegrationIntegrationsProviderAuthorizePostRequest = {
    provider: string;
  };

  export class AuthorizeIntegrationIntegrationsProviderAuthorizePostError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<AuthorizeIntegrationIntegrationsProviderAuthorizePostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type DisconnectIntegrationIntegrationsProviderDeleteRequest = {
    provider: string;
  };

  export class DisconnectIntegrationIntegrationsProviderDeleteError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<DisconnectIntegrationIntegrationsProviderDeleteError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetConnectionStatusIntegrationsProviderStatusGetRequest = {
    provider: string;
  };

  export class GetConnectionStatusIntegrationsProviderStatusGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<GetConnectionStatusIntegrationsProviderStatusGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export class ListCategoriesIntegrationsCategoriesGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ListCategoriesIntegrationsCategoriesGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type ListIntegrationsIntegrationsGetRequest = {
    /** Maximum number of results */
    limit?: Limit;
    /** Number of results to skip @default 0 */
    offset?: number;
    /** Filter by name, description or provider */
    search?: Search;
    /** Only return popular integrations @default false */
    popularOnly?: boolean;
    /** Only return integrations this project has connected @default false */
    connectedOnly?: boolean;
  };

  export const listIntegrationsIntegrationsGetRequestSchema: Schema<ListIntegrationsIntegrationsGetRequest> =
    s.lazySchema(() =>
      s.object<ListIntegrationsIntegrationsGetRequest>({
        limit: s.optional(s.lazy(() => limitSchema)),
        offset: s.defaulted(s.int().check(s.gte(0)), 0),
        search: s.optional(s.lazy(() => searchSchema)),
        popularOnly: s.defaulted(s.boolean(), false),
        connectedOnly: s.defaulted(s.boolean(), false),
      }),
    );

  export class ListIntegrationsIntegrationsGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<ListIntegrationsIntegrationsGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
