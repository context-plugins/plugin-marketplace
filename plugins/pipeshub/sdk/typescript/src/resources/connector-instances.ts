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
import { connectorStatsSchema, type ConnectorStats } from "../models/connector-stats.js";
import { connectorsResponseSchema, type ConnectorsResponse } from "../models/connectors-response.js";
import { connectorsResponse1Schema, type ConnectorsResponse1 } from "../models/connectors-response1.js";
import { connectorsResponse2Schema, type ConnectorsResponse2 } from "../models/connectors-response2.js";
import { connectorsResponse3Schema, type ConnectorsResponse3 } from "../models/connectors-response3.js";
import {
  connectorsResyncResponseSchema,
  type ConnectorsResyncResponse,
} from "../models/connectors-resync-response.js";
import {
  connectorsSyncStopResponseSchema,
  type ConnectorsSyncStopResponse,
} from "../models/connectors-sync-stop-response.js";
import {
  createConnectorRequestSchema,
  type CreateConnectorRequest,
} from "../models/create-connector-request.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  resyncConnectorRequestBodySchema,
  type ResyncConnectorRequestBody,
} from "../models/resync-connector-request-body.js";
import {
  connectorsResyncResponse1Schema,
  type ConnectorsResyncResponse1,
} from "../models/unions/connectors-resync-response1.js";
import type { Servers } from "../servers.js";

/**
 * Create, manage, and delete connector instances for your organization
 */
export class ConnectorInstances {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create connector instance
   *
   * @remarks
   * Create a connector instance from a registry type.<br><br> <b>Body:</b><br> Put the auth fields
   * the registry schema lists for <code>authType</code> in <code>config.auth</code>, flat, and the
   * connector's own sync settings in <code>config.sync</code>. A connector that needs no OAuth
   * sign-in is configured on creation.<br><br> <b>OAuth:</b><br> An admin may send the OAuth app's
   * credentials in <code>config.auth</code>: the app is saved and linked. Anyone may send
   * <code>config.auth.oauthConfigId</code> to use a saved app; non-admins must. Send
   * <code>baseUrl</code>: the provider redirects to <code>{baseUrl}/{redirectUri}</code>.<br><br>
   * <b>Scope Permissions:</b><br> <ul> <li><code>team</code> scope requires admin privileges</li>
   * <li><code>personal</code> scope available to all users</li> </ul> <b>Next Steps After
   * Creation:</b><br> <ol> <li>OAuth only: <code>GET /{id}/oauth/authorize</code>, then <code>GET
   * /oauth/callback</code></li> <li>Optionally set sync and filters via <code>PUT
   * /{id}/config/filters-sync</code></li> <li>Turn sync on via <code>POST /{id}/toggle</code></li>
   * </ol>
   *
   * @returns Connector instance created. It is not syncing yet.
   *
   * @throws {@link ConnectorInstances.CreateConnectorInstanceError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createConnectorInstance(
    request: ConnectorInstances.CreateConnectorInstanceRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectorsResponse1, ConnectorInstances.CreateConnectorInstanceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/connectors"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createConnectorRequestSchema },
      },
      {
        success: { kind: "json", schema: connectorsResponse1Schema },
        errorFactory: ConnectorInstances.CreateConnectorInstanceError,
      },
      options,
    );
  }

  /**
   * Delete connector instance
   *
   * @remarks
   * Delete a connector instance and everything synced from it. The request answers `202` as soon as
   * the deletion has started; the deletion itself runs in the background.<br><br>
   * <b>Warning:</b><br> Deletion is permanent. The connector's records, record groups, permissions
   * and relations are removed from the graph database, its embeddings are removed from the vector
   * store, its stored configuration and credentials are deleted, and its stored files are deleted
   * (content another connector still uses is kept). The records don't go to the trash and can't be
   * restored. Its sync schedule is removed too.<br><br> <b>Permissions:</b><br> The connector's
   * creator or an admin, for either scope. An admin can delete a member's personal connector.
   *
   * @returns Deletion started
   *
   * @throws {@link ConnectorInstances.DeleteConnectorInstanceError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteConnectorInstance(
    request: ConnectorInstances.DeleteConnectorInstanceRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectorsResponse3, ConnectorInstances.DeleteConnectorInstanceError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/connectors/{connectorId}"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "connectorId", value: request.connectorId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: connectorsResponse3Schema },
        errorFactory: ConnectorInstances.DeleteConnectorInstanceError,
      },
      options,
    );
  }

  /**
   * Get connector instance
   *
   * @remarks
   * Retrieve a specific connector instance by ID.
   *
   * @returns Connector instance
   *
   * @throws {@link ConnectorInstances.GetConnectorInstanceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getConnectorInstance(
    request: ConnectorInstances.GetConnectorInstanceRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectorsResponse2, ConnectorInstances.GetConnectorInstanceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/connectors/{connectorId}"),
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
        success: { kind: "json", schema: connectorsResponse2Schema },
        errorFactory: ConnectorInstances.GetConnectorInstanceError,
      },
      options,
    );
  }

  /**
   * Get connector statistics
   *
   * @remarks
   * Retrieve statistics for a specific connector instance including record counts, indexing status
   * breakdown, and sync information.
   *
   * @returns Connector statistics
   *
   * @throws {@link ConnectorInstances.GetConnectorStatsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getConnectorStats(
    request: ConnectorInstances.GetConnectorStatsRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectorStats, ConnectorInstances.GetConnectorStatsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/connectors/{connectorId}/stats"),
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
        success: { kind: "json", schema: connectorStatsSchema },
        errorFactory: ConnectorInstances.GetConnectorStatsError,
      },
      options,
    );
  }

  /**
   * List connector instances
   *
   * @remarks
   * Get all configured connector instances for your organization.<br><br> <b>Overview:</b><br>
   * Returns instances created by users, filtered by scope and permissions. Team-scope connectors
   * are visible to all org users. Personal connectors are only visible to their creators.<br><br>
   * <b>Instance States:</b><br> <ul> <li><b>isConfigured:</b> All required settings are
   * complete</li> <li><b>isAuthenticated:</b> OAuth flow complete or credentials valid</li>
   * <li><b>isActive:</b> Connector is enabled for sync/agent</li> <li><b>desktopOnline:</b> Owner
   * device's desktop app connected (Local FS only)</li> <li><b>ownerDeviceId / ownerDeviceName:</b>
   * Desktop device that owns the connector, set on first enable (Local FS only)</li> </ul>
   *
   * @returns Instances retrieved
   *
   * @throws {@link ConnectorInstances.ListConnectorInstancesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listConnectorInstances(
    request: ConnectorInstances.ListConnectorInstancesRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectorsResponse, ConnectorInstances.ListConnectorInstancesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/connectors"),
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
          { name: "isAuthenticated", value: request.isAuthenticated, schema: s.optional(s.boolean()) },
          { name: "isActive", value: request.isActive, schema: s.optional(s.boolean()) },
          { name: "connectorType", value: request.connectorType, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: connectorsResponseSchema },
        errorFactory: ConnectorInstances.ListConnectorInstancesError,
      },
      options,
    );
  }

  /**
   * Resync connector
   *
   * @remarks
   * Trigger a resync of records from a connector instance.
   *
   * **Overview:**
   *
   * Fetches content from the external source and updates local records. Use when you suspect data
   * is out of sync.
   *
   * **Warning:** This can be resource-intensive for large connectors.
   *
   * @returns Resync queued
   *
   * @throws {@link ConnectorInstances.ResyncConnectorError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resyncConnector(
    request: ConnectorInstances.ResyncConnectorRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectorsResyncResponse, ConnectorInstances.ResyncConnectorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/connectors/{connectorId}/resync"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "connectorId", value: request.connectorId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: resyncConnectorRequestBodySchema },
      },
      {
        success: { kind: "json", schema: connectorsResyncResponseSchema },
        errorFactory: ConnectorInstances.ResyncConnectorError,
      },
      options,
    );
  }

  /**
   * Stop the running sync for a connector
   *
   * @remarks
   * Ask the in-flight sync for a connector instance to stop.
   *
   * **Overview:**
   *
   * Returns as soon as the request is recorded; the sync halts at its next interruptible point,
   * which for a connector inside a long provider call is when that call returns. `stopped` reports
   * whether a sync was actually running, and `false` is a normal answer rather than a failure.
   *
   * Deliberately not refused while the connector is busy or locked: this is the endpoint that has
   * to work precisely then, including against a lock a crashed process left behind. When nothing is
   * running it also repairs a stale SYNCING or FULL_SYNCING status, unless the service cannot tell
   * a live sync on another worker from a stale one, in which case it changes nothing and says so.
   *
   * @returns Stop recorded, or nothing was running
   *
   * @throws {@link ConnectorInstances.StopConnectorSyncError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  stopConnectorSync(
    request: ConnectorInstances.StopConnectorSyncRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectorsSyncStopResponse, ConnectorInstances.StopConnectorSyncError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/connectors/{connectorId}/sync/stop"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "connectorId", value: request.connectorId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: connectorsSyncStopResponseSchema },
        errorFactory: ConnectorInstances.StopConnectorSyncError,
      },
      options,
    );
  }
}

export namespace ConnectorInstances {
  export type CreateConnectorInstanceRequest = {
    /** Request payload */
    body: CreateConnectorRequest;
  };

  export class CreateConnectorInstanceError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateConnectorInstanceError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteConnectorInstanceRequest = {
    connectorId: string;
  };

  export class DeleteConnectorInstanceError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteConnectorInstanceError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetConnectorInstanceRequest = {
    /** Connector instance ID */
    connectorId: string;
  };

  export class GetConnectorInstanceError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetConnectorInstanceError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetConnectorStatsRequest = {
    /** Connector instance ID */
    connectorId: string;
  };

  export class GetConnectorStatsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetConnectorStatsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListConnectorInstancesRequest = {
    /** Filter by scope. Defaults to <code>team</code> when omitted. @default ConnectorScope.Team */
    scope?: ConnectorScope;
    /** @default 1 */
    page?: number;
    /** @default 20 */
    limit?: number;
    /** Full-text search across instance name, type, and app group */
    search?: string;
    /**
     * Filter by authentication status. <code>true</code> returns only authenticated instances;
     * <code>false</code> returns only unauthenticated ones. Omit to return all.
     */
    isAuthenticated?: boolean;
    /**
     * Filter by active status. <code>true</code> returns only active instances; <code>false</code>
     * returns only inactive ones. Omit to return all.
     */
    isActive?: boolean;
    /**
     * Filter by exact connector type string (e.g. <code>Confluence</code>,
     * <code>GoogleDrive</code>). Case-sensitive.
     */
    connectorType?: string;
  };

  export class ListConnectorInstancesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListConnectorInstancesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ResyncConnectorRequest = {
    /** Connector instance ID */
    connectorId: string;
    /** Request body for resync connector */
    body: ResyncConnectorRequestBody;
  };

  export class ResyncConnectorError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"connectorsResyncResponse1", ConnectorsResyncResponse1>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResyncConnectorError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      {
        on: 409,
        kind: "connectorsResyncResponse1",
        decode: { kind: "json", schema: connectorsResyncResponse1Schema },
      },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type StopConnectorSyncRequest = {
    /** Connector instance ID */
    connectorId: string;
  };

  export class StopConnectorSyncError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<StopConnectorSyncError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
