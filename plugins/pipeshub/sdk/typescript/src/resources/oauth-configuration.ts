import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { connectorScopeSchema, type ConnectorScope } from "../models/connector-scope.js";
import {
  createOAuthConfigRequestSchema,
  type CreateOAuthConfigRequest,
} from "../models/create-oauth-config-request.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  oauthRegistryResponseSchema,
  type OauthRegistryResponse,
} from "../models/oauth-registry-response.js";
import {
  oauthRegistryResponse1Schema,
  type OauthRegistryResponse1,
} from "../models/oauth-registry-response1.js";
import { oauthResponseSchema, type OauthResponse } from "../models/oauth-response.js";
import { oauthResponse1Schema, type OauthResponse1 } from "../models/oauth-response1.js";
import { oauthResponse2Schema, type OauthResponse2 } from "../models/oauth-response2.js";
import { oauthResponse3Schema, type OauthResponse3 } from "../models/oauth-response3.js";
import { oauthResponse5Schema, type OauthResponse5 } from "../models/oauth-response5.js";
import { revealSchema, type Reveal } from "../models/reveal.js";
import { oauthRequest2Schema, type OauthRequest2 } from "../models/unions/oauth-request2.js";
import type { Servers } from "../servers.js";

/**
 * Admin management of OAuth credentials for connector types
 */
export class OAuthConfiguration {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create OAuth configuration
   *
   * @remarks
   * Create a new OAuth configuration for a connector type.<br><br> <b>Admin Only:</b><br> Only
   * admins can create OAuth configurations. These provide the OAuth credentials needed for users to
   * authenticate connectors.<br><br> <b>Use Case:</b><br> Before users can create Google Drive
   * connectors with OAuth, an admin must create an OAuth configuration with the Google OAuth client
   * ID and secret.
   *
   * @returns OAuth configuration created
   *
   * @throws {@link OAuthConfiguration.CreateOAuthConfigError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createOAuthConfig(
    request: OAuthConfiguration.CreateOAuthConfigRequestParams,
    options?: RequestOptions,
  ): ApiPromise<OauthResponse2, OAuthConfiguration.CreateOAuthConfigError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/oauth/{connectorType}"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "connectorType", value: request.connectorType, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createOAuthConfigRequestSchema },
      },
      {
        success: { kind: "json", schema: oauthResponse2Schema },
        errorFactory: OAuthConfiguration.CreateOAuthConfigError,
      },
      options,
    );
  }

  /**
   * Delete OAuth configuration
   *
   * @remarks
   * Delete an OAuth configuration.<br><br> <b>Admin Only:</b><br> Only admins can delete OAuth
   * configurations.<br><br> <b>Warning:</b><br> The server does not check whether connectors still
   * use the configuration: it is deleted either way, and those connectors lose their OAuth app.
   *
   * @returns OAuth configuration deleted
   *
   * @throws {@link OAuthConfiguration.DeleteOAuthConfigError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteOAuthConfig(
    request: OAuthConfiguration.DeleteOAuthConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<OauthResponse5, OAuthConfiguration.DeleteOAuthConfigError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/oauth/{connectorType}/{configId}"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [
          { name: "connectorType", value: request.connectorType, schema: s.string() },
          { name: "configId", value: request.configId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: oauthResponse5Schema },
        errorFactory: OAuthConfiguration.DeleteOAuthConfigError,
      },
      options,
    );
  }

  /**
   * Get OAuth configuration
   *
   * @remarks
   * Get a specific OAuth configuration by ID.
   *
   * @returns Saved OAuth app
   *
   * @throws {@link OAuthConfiguration.GetOAuthConfigError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOAuthConfig(
    request: OAuthConfiguration.GetOAuthConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<OauthResponse3, OAuthConfiguration.GetOAuthConfigError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/oauth/{connectorType}/{configId}"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [
          { name: "connectorType", value: request.connectorType, schema: s.string() },
          { name: "configId", value: request.configId, schema: s.string() },
        ],
        query: [{ name: "reveal", value: request.reveal, schema: s.optional(s.lazy(() => revealSchema)) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: oauthResponse3Schema },
        errorFactory: OAuthConfiguration.GetOAuthConfigError,
      },
      options,
    );
  }

  /**
   * Get OAuth connector type details
   *
   * @remarks
   * Get details for a specific OAuth-capable connector type.
   *
   * @returns Connector type retrieved
   *
   * @throws {@link OAuthConfiguration.GetOAuthConnectorTypeError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOAuthConnectorType(
    request: OAuthConfiguration.GetOAuthConnectorTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<OauthRegistryResponse1, OAuthConfiguration.GetOAuthConnectorTypeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/oauth/registry/{connectorType}"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "connectorType", value: request.connectorType, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: oauthRegistryResponse1Schema },
        errorFactory: OAuthConfiguration.GetOAuthConnectorTypeError,
      },
      options,
    );
  }

  /**
   * List OAuth-capable connector types
   *
   * @remarks
   * Get all connector types that support OAuth authentication.<br><br> <b>Admin Use:</b><br> Admins
   * use this to see which connector types need OAuth credentials to be configured before users can
   * authenticate.
   *
   * @returns OAuth connector types retrieved
   *
   * @throws {@link OAuthConfiguration.GetOAuthRegistryError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOAuthRegistry(
    request: OAuthConfiguration.GetOAuthRegistryRequest,
    options?: RequestOptions,
  ): ApiPromise<OauthRegistryResponse, OAuthConfiguration.GetOAuthRegistryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/oauth/registry"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: oauthRegistryResponseSchema },
        errorFactory: OAuthConfiguration.GetOAuthRegistryError,
      },
      options,
    );
  }

  /**
   * List OAuth configurations
   *
   * @remarks
   * List the saved OAuth apps of every connector type in the organization.<br><br> Every caller,
   * admin or not, gets the same essential fields (ID, name, connector type, app metadata,
   * timestamps). Credentials are never included; an admin reads them per app with <code>GET
   * /oauth/{connectorType}/{configId}</code>.
   *
   * @returns OAuth apps of every connector type
   *
   * @throws {@link OAuthConfiguration.ListOAuthConfigsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listOAuthConfigs(
    request: OAuthConfiguration.ListOAuthConfigsRequest,
    options?: RequestOptions,
  ): ApiPromise<OauthResponse, OAuthConfiguration.ListOAuthConfigsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/oauth"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: oauthResponseSchema },
        errorFactory: OAuthConfiguration.ListOAuthConfigsError,
      },
      options,
    );
  }

  /**
   * List OAuth configs for connector type
   *
   * @remarks
   * Get all OAuth configurations for a specific connector type.
   *
   * @returns Saved OAuth apps
   *
   * @throws {@link OAuthConfiguration.ListOAuthConfigsByTypeError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listOAuthConfigsByType(
    request: OAuthConfiguration.ListOAuthConfigsByTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<OauthResponse1, OAuthConfiguration.ListOAuthConfigsByTypeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/oauth/{connectorType}"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "connectorType", value: request.connectorType, schema: s.string() }],
        query: [
          { name: "scope", value: request.scope, schema: s.optional(s.lazy(() => connectorScopeSchema)) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "reveal", value: request.reveal, schema: s.optional(s.lazy(() => revealSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: oauthResponse1Schema },
        errorFactory: OAuthConfiguration.ListOAuthConfigsByTypeError,
      },
      options,
    );
  }

  /**
   * Update OAuth configuration
   *
   * @remarks
   * Update an OAuth configuration.<br><br> <b>Admin Only:</b><br> Only an admin can update,
   * including apps another admin created.
   *
   * @returns OAuth configuration updated
   *
   * @throws {@link OAuthConfiguration.UpdateOAuthConfigError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateOAuthConfig(
    request: OAuthConfiguration.UpdateOAuthConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<OauthResponse2, OAuthConfiguration.UpdateOAuthConfigError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/oauth/{connectorType}/{configId}"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [
          { name: "connectorType", value: request.connectorType, schema: s.string() },
          { name: "configId", value: request.configId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: oauthRequest2Schema },
      },
      {
        success: { kind: "json", schema: oauthResponse2Schema },
        errorFactory: OAuthConfiguration.UpdateOAuthConfigError,
      },
      options,
    );
  }
}

export namespace OAuthConfiguration {
  export type CreateOAuthConfigRequestParams = {
    connectorType: string;
    /** Request payload */
    body: CreateOAuthConfigRequest;
  };

  export class CreateOAuthConfigError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateOAuthConfigError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteOAuthConfigRequest = {
    connectorType: string;
    configId: string;
  };

  export class DeleteOAuthConfigError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteOAuthConfigError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetOAuthConfigRequest = {
    connectorType: string;
    configId: string;
    /**
     * Set to `true` to receive stored secrets instead of placeholders. Honoured only for an admin's
     * own configuration where the deployment allows it (see `GET
     * /configurationManager/secretReveal`); ignored for OAuth-app tokens and any other value.
     */
    reveal?: Reveal;
  };

  export class GetOAuthConfigError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetOAuthConfigError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetOAuthConnectorTypeRequest = {
    connectorType: string;
  };

  export class GetOAuthConnectorTypeError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetOAuthConnectorTypeError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetOAuthRegistryRequest = {
    /** @default 1 */
    page?: number;
    /** @default 20 */
    limit?: number;
    /** Matches the connector type's name, group or description */
    search?: string;
  };

  export class GetOAuthRegistryError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetOAuthRegistryError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListOAuthConfigsRequest = {
    /** @default 1 */
    page?: number;
    /** @default 20 */
    limit?: number;
    search?: string;
  };

  export class ListOAuthConfigsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListOAuthConfigsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListOAuthConfigsByTypeRequest = {
    connectorType: string;
    /** Only OAuth apps usable for this connector scope */
    scope?: ConnectorScope;
    /** @default 1 */
    page?: number;
    /** @default 20 */
    limit?: number;
    search?: string;
    /**
     * Set to `true` to receive stored secrets instead of placeholders. Honoured only for an admin's
     * own configuration where the deployment allows it (see `GET
     * /configurationManager/secretReveal`); ignored for OAuth-app tokens and any other value.
     */
    reveal?: Reveal;
  };

  export class ListOAuthConfigsByTypeError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListOAuthConfigsByTypeError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateOAuthConfigRequest = {
    connectorType: string;
    configId: string;
    /**
     * Send `oauthInstanceName`, `config`, or both; a body with neither is refused, even if it
     * carries `baseUrl`.
     */
    body: OauthRequest2;
  };

  export class UpdateOAuthConfigError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateOAuthConfigError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
