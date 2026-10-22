import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { ConnectorScope, connectorScopeSchema } from "../models/connector-scope.js";
import {
  connectorsNetworkEgressIpsResponseSchema,
  type ConnectorsNetworkEgressIpsResponse,
} from "../models/connectors-network-egress-ips-response.js";
import {
  connectorsRegistryResponseSchema,
  type ConnectorsRegistryResponse,
} from "../models/connectors-registry-response.js";
import {
  connectorsRegistrySchemaResponseSchema,
  type ConnectorsRegistrySchemaResponse,
} from "../models/connectors-registry-schema-response.js";
import {
  connectorsRegistryTestConnectionRequestSchema,
  type ConnectorsRegistryTestConnectionRequest,
} from "../models/connectors-registry-test-connection-request.js";
import {
  connectorsRegistryTestConnectionResponseSchema,
  type ConnectorsRegistryTestConnectionResponse,
} from "../models/connectors-registry-test-connection-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

/**
 * Browse available connector types and their configuration schemas
 */
export class ConnectorRegistry {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get the IP addresses connectors connect from
   *
   * @remarks
   * Public IP addresses PipesHub's connectors use to reach external systems, for users to allow in
   * a database's or API's firewall.<br><br> Set by the deployment through
   * <code>CONNECTOR_EGRESS_IPS</code>; otherwise looked up by the connector service and cached. The
   * list is empty when the address cannot be determined, or when the deployment sets
   * <code>CONNECTOR_EGRESS_IPS=none</code>.
   *
   * @returns Egress IP addresses
   *
   * @throws {@link ConnectorRegistry.GetConnectorEgressIpsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getConnectorEgressIps(
    options?: RequestOptions,
  ): ApiPromise<ConnectorsNetworkEgressIpsResponse, ConnectorRegistry.GetConnectorEgressIpsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/connectors/network/egress-ips"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: connectorsNetworkEgressIpsResponseSchema },
        errorFactory: ConnectorRegistry.GetConnectorEgressIpsError,
      },
      options,
    );
  }

  /**
   * List available connector types
   *
   * @remarks
   * Get all available connector types from the registry.<br><br> <b>Overview:</b><br> The registry
   * contains all connector types that can be configured as instances. Each type has specific
   * authentication requirements, supported scopes, and capabilities.<br><br> <b>Connector Types
   * Include:</b><br> <ul> <li><b>Google Workspace:</b> Drive, Gmail, Calendar, etc.</li>
   * <li><b>Microsoft 365:</b> OneDrive, Outlook, SharePoint, etc.</li> <li><b>Cloud Storage:</b>
   * Dropbox, Box, AWS S3</li> <li><b>Collaboration:</b> Slack, Confluence, Notion, Jira</li>
   * <li><b>Databases:</b> PostgreSQL, MySQL, MongoDB</li> </ul> <b>Filtering:</b><br> Use
   * <code>scope</code> to filter by team or personal connectors. Use <code>search</code> for
   * full-text search across connector names.
   *
   * @returns Connector registry retrieved
   *
   * @throws {@link ConnectorRegistry.GetConnectorRegistryError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getConnectorRegistry(
    request: ConnectorRegistry.GetConnectorRegistryRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectorsRegistryResponse, ConnectorRegistry.GetConnectorRegistryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/connectors/registry"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [],
        query: [
          {
            name: "scope",
            value: request.scope,
            schema: s.defaulted(connectorScopeSchema, ConnectorScope.Team),
          },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: connectorsRegistryResponseSchema },
        errorFactory: ConnectorRegistry.GetConnectorRegistryError,
      },
      options,
    );
  }

  /**
   * Get connector configuration schema
   *
   * @remarks
   * The configuration form for one connector type.<br><br> <b>Sections:</b><br> <ul>
   * <li><b>auth:</b> <code>supportedAuthTypes</code>, and per auth type in <code>schemas</code> the
   * fields to send in <code>config.auth</code> (by <code>name</code>) plus, for OAuth, the
   * <code>redirectUri</code> path</li> <li><b>sync:</b> <code>supportedStrategies</code>,
   * <code>scheduledConfig</code> defaults, and the connector's own settings in
   * <code>customFields</code> (sent in <code>config.sync</code> by <code>name</code>)</li>
   * <li><b>filters:</b> the <code>sync</code> and <code>indexing</code> filter fields; a field with
   * <code>optionSourceType: dynamic</code> gets its values from <code>GET
   * /connectors/{connectorId}/filters/{filterKey}/options</code></li> </ul>
   *
   * @returns Connector schema retrieved
   *
   * @throws {@link ConnectorRegistry.GetConnectorSchemaError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getConnectorSchema(
    request: ConnectorRegistry.GetConnectorSchemaRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectorsRegistrySchemaResponse, ConnectorRegistry.GetConnectorSchemaError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/connectors/registry/{connectorType}/schema"),
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
        success: { kind: "json", schema: connectorsRegistrySchemaResponseSchema },
        errorFactory: ConnectorRegistry.GetConnectorSchemaError,
      },
      options,
    );
  }

  /**
   * Test connector credentials before saving
   *
   * @remarks
   * Try the auth settings from a connector's setup form without creating or changing an
   * instance.<br><br> <b>Overview:</b><br> Only connector types whose schema has
   * <code>supportsConnectionCheck: true</code> can be tested. A failed check is not an error: the
   * response is <code>200</code> with <code>success: false</code> and a <code>message</code> to
   * show the user (for example a wrong password, an unknown database, or a timeout because a
   * firewall blocks PipesHub's IP address).<br><br> <b>Editing an instance:</b><br> Pass
   * <code>connectorId</code> to lay the settings over the instance's saved ones, as <code>PUT
   * /connectors/{connectorId}/config/auth</code> does. The caller must be allowed to update that
   * instance.
   *
   * @returns Check ran; see <code>success</code>
   *
   * @throws {@link ConnectorRegistry.TestConnectorConnectionError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  testConnectorConnection(
    request: ConnectorRegistry.TestConnectorConnectionRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectorsRegistryTestConnectionResponse, ConnectorRegistry.TestConnectorConnectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/connectors/registry/{connectorType}/test-connection"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "connectorType", value: request.connectorType, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: connectorsRegistryTestConnectionRequestSchema },
      },
      {
        success: { kind: "json", schema: connectorsRegistryTestConnectionResponseSchema },
        errorFactory: ConnectorRegistry.TestConnectorConnectionError,
      },
      options,
    );
  }
}

export namespace ConnectorRegistry {
  export class GetConnectorEgressIpsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetConnectorEgressIpsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetConnectorRegistryRequest = {
    /** Which connector types to list. Defaults to `team`. @default ConnectorScope.Team */
    scope?: ConnectorScope;
    /** Page number @default 1 */
    page?: number;
    /** Items per page @default 20 */
    limit?: number;
    /** Search term for connector names */
    search?: string;
  };

  export class GetConnectorRegistryError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetConnectorRegistryError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetConnectorSchemaRequest = {
    /** Connector type: `type` from GET /connectors/registry */
    connectorType: string;
  };

  export class GetConnectorSchemaError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetConnectorSchemaError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type TestConnectorConnectionRequest = {
    /** Connector type identifier */
    connectorType: string;
    body: ConnectorsRegistryTestConnectionRequest;
  };

  export class TestConnectorConnectionError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<TestConnectorConnectionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 503, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
