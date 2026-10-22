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
  connectorsFiltersOptionsResponseSchema,
  type ConnectorsFiltersOptionsResponse,
} from "../models/connectors-filters-options-response.js";
import {
  connectorsFiltersResponseSchema,
  type ConnectorsFiltersResponse,
} from "../models/connectors-filters-response.js";
import {
  connectorsFiltersResponse1Schema,
  type ConnectorsFiltersResponse1,
} from "../models/connectors-filters-response1.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  saveConnectorFiltersRequestSchema,
  type SaveConnectorFiltersRequest,
} from "../models/save-connector-filters-request.js";
import type { Servers } from "../servers.js";

/**
 * Dynamic filter options for selecting which data to sync
 */
export class ConnectorFilters {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get filter options
   *
   * @remarks
   * Get available filter options for a connector.<br><br> <b>Overview:</b><br> Returns filter
   * fields that can be used to limit what data is synced. For example, a Google Drive connector
   * might offer filters for specific folders or file types.<br><br> <b>Dynamic Filters:</b><br>
   * Some filter fields have <code>dynamic: true</code> (i.e. <code>optionSourceType:
   * dynamic</code>), meaning their options are loaded separately via the filter options endpoint.
   * For such fields, call <code>GET /connectors/{connectorId}/filters/{filterKey}/options</code>.
   * When scoping options to a specific parent (e.g. GitLab projects within a selected group), pass
   * the parent paths via the <code>contextGroupPath</code> query parameter on that
   * endpoint.<br><br> <b>Which connectors answer:</b><br> Only connectors with auth type
   * <code>API_TOKEN</code>, <code>USERNAME_PASSWORD</code> or <code>OAUTH_ADMIN_CONSENT</code> (and
   * saved settings), and <code>OAUTH</code> connectors that have completed sign-in. Every other
   * connector is refused with <code>400</code>: those with auth type <code>NONE</code> (for example
   * RSS), <code>BASIC_AUTH</code>, <code>ACCESS_KEY</code>, <code>CONNECTION_STRING</code> or
   * <code>CUSTOM</code> (<code>Unsupported authentication type: ...</code>), an OAUTH connector
   * that has not signed in, and a token or password connector with no saved settings. Their filter
   * fields are in the registry schema; dynamic values come from <code>GET
   * /connectors/{connectorId}/filters/{filterKey}/options</code>.
   *
   * @returns Filter options retrieved
   *
   * @throws {@link ConnectorFilters.GetConnectorFiltersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getConnectorFilters(
    request: ConnectorFilters.GetConnectorFiltersRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectorsFiltersResponse, ConnectorFilters.GetConnectorFiltersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/connectors/{connectorId}/filters"),
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
        success: { kind: "json", schema: connectorsFiltersResponseSchema },
        errorFactory: ConnectorFilters.GetConnectorFiltersError,
      },
      options,
    );
  }

  /**
   * Get dynamic filter options
   *
   * @remarks
   * Get options for a dynamic filter field with pagination.<br><br> <b>Overview:</b><br> For
   * filters with <code>optionSourceType: dynamic</code>, options are loaded from the connected
   * service. This supports pagination and search.<br><br> <b>Scoped options (GitLab):</b><br> When
   * fetching options for the <code>project_ids</code> filter key, pass one or more
   * <code>contextGroupPath</code> query parameters to restrict the returned repositories to those
   * that belong to the specified GitLab group namespace paths (e.g. <code>myorg/team</code>). This
   * is used to populate the project filter after the user has selected groups.<br><br>
   * <b>Examples:</b><br> <ul> <li>Google Drive folders list</li> <li>Slack channels list</li>
   * <li>Confluence spaces list</li> <li>GitLab groups list (<code>filterKey=group_ids</code>)</li>
   * <li>GitLab projects scoped to groups
   * (<code>filterKey=project_ids&amp;contextGroupPath=myorg/team</code>)</li> </ul>
   *
   * @returns Filter options
   *
   * @throws {@link ConnectorFilters.GetFilterFieldOptionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFilterFieldOptions(
    request: ConnectorFilters.GetFilterFieldOptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ConnectorsFiltersOptionsResponse, ConnectorFilters.GetFilterFieldOptionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/connectors/{connectorId}/filters/{filterKey}/options"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [
          { name: "connectorId", value: request.connectorId, schema: s.string() },
          { name: "filterKey", value: request.filterKey, schema: s.string() },
        ],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 20) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          {
            name: "contextGroupPath",
            value: request.contextGroupPath,
            schema: s.optional(s.array(s.string())),
          },
          {
            name: "excludeContextGroupPath",
            value: request.excludeContextGroupPath,
            schema: s.optional(s.array(s.string())),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: connectorsFiltersOptionsResponseSchema },
        errorFactory: ConnectorFilters.GetFilterFieldOptionsError,
      },
      options,
    );
  }

  /**
   * Save filter selections (deprecated)
   *
   * @remarks
   * <b>Deprecated.</b> Save filters with <code>PUT
   * /connectors/{connectorId}/config/filters-sync</code> instead, which is what the PipesHub app
   * uses. That route takes <code>{sync?, filters?: {sync, indexing}}</code>. It ignores the flat
   * <code>filters</code> map this one takes: the call still returns 200, but nothing is saved. It
   * also refuses while the connector is active, so disable it first. This endpoint will be removed
   * in a future release.<br><br> What this endpoint saves goes to <code>filters.values</code>,
   * which sync does not read: sync reads <code>filters.sync</code> and
   * <code>filters.indexing</code>.<br><br> Save the user's filter selections for a
   * connector.<br><br> <b>Overview:</b><br> <b>Request:</b><br> <code>filters</code> must hold at
   * least one entry: <code>{"filters": {}}</code> is refused with <code>400</code>. The server
   * stores whatever it is given under the connector's saved filter values without checking it
   * against the filter schema. Use <code>PUT /connectors/{connectorId}/config/filters-sync</code>
   * to save typed sync and indexing filters.
   *
   * @returns Filters saved
   *
   * @throws {@link ConnectorFilters.SaveConnectorFiltersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  saveConnectorFilters(
    request: ConnectorFilters.SaveConnectorFiltersRequestParams,
    options?: RequestOptions,
  ): ApiPromise<ConnectorsFiltersResponse1, ConnectorFilters.SaveConnectorFiltersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/connectors/{connectorId}/filters"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "connectorId", value: request.connectorId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: saveConnectorFiltersRequestSchema },
      },
      {
        success: { kind: "json", schema: connectorsFiltersResponse1Schema },
        errorFactory: ConnectorFilters.SaveConnectorFiltersError,
      },
      options,
    );
  }
}

export namespace ConnectorFilters {
  export type GetConnectorFiltersRequest = {
    connectorId: string;
  };

  export class GetConnectorFiltersError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetConnectorFiltersError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetFilterFieldOptionsRequest = {
    /** Connector instance ID */
    connectorId: string;
    /** Filter field key */
    filterKey: string;
    /** @default 1 */
    page?: number;
    /** @default 20 */
    limit?: number;
    /** Search term for filtering options */
    search?: string;
    /** Cursor for cursor-based pagination */
    cursor?: string;
    /**
     * One or more GitLab group namespace paths (e.g. `myorg/team`). When provided for the
     * `project_ids` filter key, the returned options are scoped to repositories that belong to
     * those groups. Repeat the parameter for multiple groups:
     * `?contextGroupPath=groupA&contextGroupPath=groupB`
     */
    contextGroupPath?: string[];
    /**
     * One or more GitLab group namespace paths to exclude. When provided for the `project_ids`
     * filter key, the returned options omit repositories that belong to those groups (used when the
     * `group_ids` sync filter is `not_in`). Repeat the parameter for multiple groups:
     * `?excludeContextGroupPath=groupA&excludeContextGroupPath=groupB`
     */
    excludeContextGroupPath?: string[];
  };

  export class GetFilterFieldOptionsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFilterFieldOptionsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SaveConnectorFiltersRequestParams = {
    connectorId: string;
    /** Request payload */
    body: SaveConnectorFiltersRequest;
  };

  export class SaveConnectorFiltersError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SaveConnectorFiltersError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 409, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
