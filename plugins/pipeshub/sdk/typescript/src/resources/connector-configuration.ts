import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  connectorsConfigAuthResponseSchema,
  type ConnectorsConfigAuthResponse,
} from "../models/connectors-config-auth-response.js";
import {
  connectorsConfigFiltersSyncResponseSchema,
  type ConnectorsConfigFiltersSyncResponse,
} from "../models/connectors-config-filters-sync-response.js";
import {
  connectorsConfigResponseSchema,
  type ConnectorsConfigResponse,
} from "../models/connectors-config-response.js";
import {
  connectorsConfigResponse1Schema,
  type ConnectorsConfigResponse1,
} from "../models/connectors-config-response1.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  updateConnectorAuthRequestSchema,
  type UpdateConnectorAuthRequest,
} from "../models/update-connector-auth-request.js";
import {
  updateConnectorConfigRequestSchema,
  type UpdateConnectorConfigRequest,
} from "../models/update-connector-config-request.js";
import {
  updateConnectorFiltersSyncRequestSchema,
  type UpdateConnectorFiltersSyncRequest,
} from "../models/update-connector-filters-sync-request.js";
import type { Servers } from "../servers.js";

/**
 * Configure authentication, sync settings, and filters for connectors
 */
export class ConnectorConfiguration {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get connector configuration
   *
   * @remarks
   * Get the current configuration for a connector instance.<br><br> <b>Security:</b><br> OAuth
   * tokens are never returned. Each stored secret in <code>config.auth</code> is returned as
   * <code>••••••••</code>: a field the connector type's auth schema marks secret (such as an API
   * token or password), a secret field of its OAuth app registration (such as
   * <code>clientSecret</code>), or the <code>private_key</code> of an older Google Workspace
   * service account.
   *
   * @returns Saved configuration
   *
   * @throws {@link ConnectorConfiguration.GetConnectorConfigError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getConnectorConfig(
    request: ConnectorConfiguration.GetConnectorConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectorsConfigResponse, ConnectorConfiguration.GetConnectorConfigError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/connectors/{connectorId}/config"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "connectorId", value: request.connectorId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: connectorsConfigResponseSchema },
        errorFactory: ConnectorConfiguration.GetConnectorConfigError,
      },
      options,
    );
  }

  /**
   * Update authentication configuration
   *
   * @remarks
   * Update only the authentication configuration.<br><br> <b>Use Case:</b><br> Use this when you
   * need to update credentials without changing sync or filter settings. Useful for credential
   * rotation.<br><br> <b>Prerequisites:</b><br> Connector must be disabled. This endpoint clears
   * OAuth state, requiring re-authentication for OAuth connectors.<br><br> <b>Secrets:</b><br> A
   * secret field sent as <code>••••••••</code> keeps the stored value; send a new value to replace
   * it. The response masks stored secrets the same way.
   *
   * @returns Auth settings saved. The connector is signed out and turned off.
   *
   * @throws {@link ConnectorConfiguration.UpdateConnectorAuthConfigError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateConnectorAuthConfig(
    request: ConnectorConfiguration.UpdateConnectorAuthConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectorsConfigAuthResponse, ConnectorConfiguration.UpdateConnectorAuthConfigError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/connectors/{connectorId}/config/auth"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "connectorId", value: request.connectorId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateConnectorAuthRequestSchema },
      },
      {
        success: { kind: "json", schema: connectorsConfigAuthResponseSchema },
        errorFactory: ConnectorConfiguration.UpdateConnectorAuthConfigError,
      },
      options,
    );
  }

  /**
   * Update connector configuration
   *
   * @remarks
   * Update authentication, sync, and filter configuration.<br><br> <b>Prerequisites:</b><br>
   * Connector must be <b>disabled</b> before updating configuration. Disable it first using
   * <code>POST /{id}/toggle</code>.<br><br> <b>Partial Updates:</b><br> Only provide the sections
   * you want to update. Omitted sections are not modified.<br><br> <b>Secrets:</b><br> A secret
   * field in <code>auth</code> sent as <code>••••••••</code> keeps the stored value, so the
   * configuration can be sent back as it was read. The response masks stored secrets the same
   * way.<br><br> <b>Signing out:</b><br> A change to <code>auth</code>, a different top-level
   * <code>oauthConfigId</code>, or a linked OAuth app that now holds a different client signs the
   * connector out and clears its OAuth tokens. Sending <code>auth</code> back as it was read, with
   * secrets as the mask or in full, keeps it signed in.<br><br> <b>OAuth apps (OAUTH
   * connectors):</b><br> An OAUTH connector signs in with the client ID and secret of its linked
   * OAuth app, so client credentials an admin sends in <code>auth</code> go into an app, as on
   * <code>PUT /{connectorId}/config/auth</code>: <ul> <li>On a connector with no app, an app is
   * created from them and linked (<code>auth.oauthConfigId</code> in the response) once every
   * required OAuth field is present; until then the values are kept on the connector.</li> <li>On a
   * linked connector, changed values update the app named in <code>auth.oauthConfigId</code>, and
   * only the fields that changed. Without that field a new app is created and linked; the
   * previously linked app, which other connectors may share, is not changed.</li> <li>The new app
   * is named <code>auth.oauthInstanceName</code>, or else after the connector.</li> </ul> A linked
   * connector stores no copy of its app's secret fields: they are not stored, and not returned, in
   * <code>config.auth</code>. Its client ID and provider URLs are the app's. Only an admin's
   * credentials create or change an app.
   *
   * @returns Configuration updated
   *
   * @throws {@link ConnectorConfiguration.UpdateConnectorConfigError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateConnectorConfig(
    request: ConnectorConfiguration.UpdateConnectorConfigRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ConnectorsConfigResponse1, ConnectorConfiguration.UpdateConnectorConfigError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/connectors/{connectorId}/config"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "connectorId", value: request.connectorId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateConnectorConfigRequestSchema },
      },
      {
        success: { kind: "json", schema: connectorsConfigResponse1Schema },
        errorFactory: ConnectorConfiguration.UpdateConnectorConfigError,
      },
      options,
    );
  }

  /**
   * Update filters and sync configuration
   *
   * @remarks
   * Update filter selections and sync settings without touching auth.<br><br> <b>Use Case:</b><br>
   * Use this to change what data is synced or adjust sync schedule without re-authenticating.
   *
   * @returns Sync and filter settings saved; the connector is configured
   *
   * @throws {@link ConnectorConfiguration.UpdateConnectorFiltersSyncConfigError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateConnectorFiltersSyncConfig(
    request: ConnectorConfiguration.UpdateConnectorFiltersSyncConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ConnectorsConfigFiltersSyncResponse,
    ConnectorConfiguration.UpdateConnectorFiltersSyncConfigError
  > {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/connectors/{connectorId}/config/filters-sync"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "connectorId", value: request.connectorId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateConnectorFiltersSyncRequestSchema },
      },
      {
        success: { kind: "json", schema: connectorsConfigFiltersSyncResponseSchema },
        errorFactory: ConnectorConfiguration.UpdateConnectorFiltersSyncConfigError,
      },
      options,
    );
  }
}

export namespace ConnectorConfiguration {
  export type GetConnectorConfigRequest = {
    /** Connector instance ID */
    connectorId: string;
  };

  export class GetConnectorConfigError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetConnectorConfigError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateConnectorAuthConfigRequest = {
    /** Connector instance ID */
    connectorId: string;
    /** Request payload */
    body: UpdateConnectorAuthRequest;
  };

  export class UpdateConnectorAuthConfigError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateConnectorAuthConfigError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateConnectorConfigRequestParams = {
    connectorId: string;
    /** Request payload */
    body: UpdateConnectorConfigRequest;
  };

  export class UpdateConnectorConfigError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateConnectorConfigError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type UpdateConnectorFiltersSyncConfigRequest = {
    /** Connector instance ID */
    connectorId: string;
    /** Request payload */
    body: UpdateConnectorFiltersSyncRequest;
  };

  export class UpdateConnectorFiltersSyncConfigError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateConnectorFiltersSyncConfigError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
