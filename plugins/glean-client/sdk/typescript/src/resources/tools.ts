import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  actionPackAuthStatusResponseSchema,
  type ActionPackAuthStatusResponse,
} from "../models/action-pack-auth-status-response.js";
import {
  authorizeActionPackRequestSchema,
  type AuthorizeActionPackRequest,
} from "../models/authorize-action-pack-request.js";
import {
  authorizeActionPackResponseSchema,
  type AuthorizeActionPackResponse,
} from "../models/authorize-action-pack-response.js";
import {
  authorizeToolServerRequestSchema,
  type AuthorizeToolServerRequest,
} from "../models/authorize-tool-server-request.js";
import {
  authorizeToolServerResponseSchema,
  type AuthorizeToolServerResponse,
} from "../models/authorize-tool-server-response.js";
import {
  toolDefinitionsResponseSchema,
  type ToolDefinitionsResponse,
} from "../models/tool-definitions-response.js";
import {
  toolServerAuthStatusResponseSchema,
  type ToolServerAuthStatusResponse,
} from "../models/tool-server-auth-status-response.js";
import { toolsCallRequestSchema, type ToolsCallRequest } from "../models/tools-call-request.js";
import { toolsCallResponseSchema, type ToolsCallResponse } from "../models/tools-call-response.js";
import { toolsListResponseSchema, type ToolsListResponse } from "../models/tools-list-response.js";
import type { Servers } from "../servers.js";

export class Tools {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Execute the specified tool
   *
   * @remarks
   * Execute the specified tool with provided parameters
   *
   * @returns Successful operation
   *
   * @throws {@link Tools.ExecuteTheSpecifiedToolError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  executeTheSpecifiedTool(
    request: Tools.ExecuteTheSpecifiedToolRequest,
    options?: RequestOptions,
  ): ApiPromise<ToolsCallResponse, Tools.ExecuteTheSpecifiedToolError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/tools/call"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: toolsCallRequestSchema },
      },
      {
        success: { kind: "json", schema: toolsCallResponseSchema },
        errorFactory: Tools.ExecuteTheSpecifiedToolError,
      },
      options,
    );
  }

  /**
   * List available tools
   *
   * @remarks
   * Returns a filtered set of available tools based on optional tool name parameters. If no filters
   * are provided, all available tools are returned.
   *
   * @returns Successful operation
   *
   * @throws {@link Tools.ListAvailableToolsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAvailableTools(
    request: Tools.ListAvailableToolsRequest,
    options?: RequestOptions,
  ): ApiPromise<ToolsListResponse, Tools.ListAvailableToolsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/rest/api/v1/tools/list"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "toolNames", value: request.toolNames, schema: s.optional(s.array(s.string())) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: toolsListResponseSchema },
        errorFactory: Tools.ListAvailableToolsError,
      },
      options,
    );
  }

  /**
   * Start the OAuth authorization flow for an action pack.
   *
   * @remarks
   * Starts the third-party OAuth flow for the specified action pack and returns the redirect URL
   * that the client should navigate the end user to. After the OAuth callback completes, the user's
   * browser is redirected back to `returnUrl` with a status query parameter
   * (`?glean_action_auth=success|error&actionPackId=...`).
   *
   * `returnUrl` must match the tenant's configured return URL allowlist; otherwise the request is
   * rejected with 400.
   *
   * @returns Successful operation
   *
   * @throws {@link Tools.AuthorizeActionPackError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  authorizeActionPack(
    request: Tools.AuthorizeActionPackRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AuthorizeActionPackResponse, Tools.AuthorizeActionPackError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/actions/actionpack/{actionPackId}/auth"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "actionPackId", value: request.actionPackId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: authorizeActionPackRequestSchema },
      },
      {
        success: { kind: "json", schema: authorizeActionPackResponseSchema },
        errorFactory: Tools.AuthorizeActionPackError,
      },
      options,
    );
  }

  /**
   * Start the OAuth authorization flow for a tool server.
   *
   * @remarks
   * Initiates the third-party OAuth flow for the specified tool server and returns the
   * authorization URL that the client should navigate the end user to. After the OAuth callback
   * completes, the user's browser is redirected back to `returnUrl` with query parameters
   * indicating the result.
   *
   * `returnUrl` must match the tenant's configured return URL allowlist; otherwise the request is
   * rejected with 400.
   *
   * @returns Successful operation
   *
   * @throws {@link Tools.AuthorizeToolServerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  authorizeToolServer(
    request: Tools.AuthorizeToolServerRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AuthorizeToolServerResponse, Tools.AuthorizeToolServerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/rest/api/v1/tool-servers/{serverId}/auth"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "serverId", value: request.serverId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: authorizeToolServerRequestSchema },
      },
      {
        success: { kind: "json", schema: authorizeToolServerResponseSchema },
        errorFactory: Tools.AuthorizeToolServerError,
      },
      options,
    );
  }

  /**
   * Get end-user authentication status for an action pack.
   *
   * @remarks
   * Reports whether the calling user is already authenticated against the third-party tool backing
   * the specified action pack. Intended for headless / server-driven clients that render an
   * "Authorize" prompt when the user has not yet consented to the tool.
   *
   * @returns Successful operation
   *
   * @throws {@link Tools.GetActionPackAuthStatusError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getActionPackAuthStatus(
    request: Tools.GetActionPackAuthStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<ActionPackAuthStatusResponse, Tools.GetActionPackAuthStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/rest/api/v1/actions/actionpack/{actionPackId}/auth"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "actionPackId", value: request.actionPackId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: actionPackAuthStatusResponseSchema },
        errorFactory: Tools.GetActionPackAuthStatusError,
      },
      options,
    );
  }

  /**
   * Get end-user authentication status for a tool server.
   *
   * @remarks
   * Returns display information and the calling user's current authentication status for the
   * specified tool server.
   *
   * @returns Successful operation
   *
   * @throws {@link Tools.GetToolServerAuthStatusError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getToolServerAuthStatus(
    request: Tools.GetToolServerAuthStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<ToolServerAuthStatusResponse, Tools.GetToolServerAuthStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/rest/api/v1/tool-servers/{serverId}/auth"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "serverId", value: request.serverId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: toolServerAuthStatusResponseSchema },
        errorFactory: Tools.GetToolServerAuthStatusError,
      },
      options,
    );
  }

  /**
   * Get tool definitions from a tool server.
   *
   * @remarks
   * Returns the name, description and JSON input schema for the named tools on the specified tool
   * server. Works for Glean's built-in tools, tool packs and MCP servers.
   *
   * `toolNames` is required. Names that do not exist on the server are returned in `notFound`
   * rather than failing the request, so a single bad name does not force callers into one-at-a-time
   * retries. Matching is case-insensitive and treats `-` and `_` as equivalent.
   *
   * Use `serverId=native` for Glean's built-in tools.
   *
   * @returns Successful operation
   *
   * @throws {@link Tools.GetToolServerToolsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanClientApiError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getToolServerTools(
    request: Tools.GetToolServerToolsRequest,
    options?: RequestOptions,
  ): ApiPromise<ToolDefinitionsResponse, Tools.GetToolServerToolsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/rest/api/v1/tool-servers/{serverId}/tools"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "serverId", value: request.serverId, schema: s.string() }],
        query: [{ name: "toolNames", value: request.toolNames, schema: s.array(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: toolDefinitionsResponseSchema },
        errorFactory: Tools.GetToolServerToolsError,
      },
      options,
    );
  }
}

export namespace Tools {
  export type ExecuteTheSpecifiedToolRequest = {
    body: ToolsCallRequest;
  };

  export class ExecuteTheSpecifiedToolError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ExecuteTheSpecifiedToolError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListAvailableToolsRequest = {
    /** Optional array of tool names to filter by */
    toolNames?: string[];
  };

  export class ListAvailableToolsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAvailableToolsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type AuthorizeActionPackRequestParams = {
    /** ID of the action pack to query or authorize. */
    actionPackId: string;
    body: AuthorizeActionPackRequest;
  };

  export class AuthorizeActionPackError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<AuthorizeActionPackError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type AuthorizeToolServerRequestParams = {
    /** Unique identifier of the tool server. */
    serverId: string;
    body: AuthorizeToolServerRequest;
  };

  export class AuthorizeToolServerError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<AuthorizeToolServerError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetActionPackAuthStatusRequest = {
    /** ID of the action pack to query or authorize. */
    actionPackId: string;
  };

  export class GetActionPackAuthStatusError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetActionPackAuthStatusError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetToolServerAuthStatusRequest = {
    /** Unique identifier of the tool server. */
    serverId: string;
  };

  export class GetToolServerAuthStatusError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetToolServerAuthStatusError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetToolServerToolsRequest = {
    /** Unique identifier of the tool server. */
    serverId: string;
    /** Tool names to look up on this server. Maximum 100. */
    toolNames: string[];
  };

  export class GetToolServerToolsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error429", undefined>
      | Declared<"error503", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetToolServerToolsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 503, kind: "error503", decode: { kind: "empty" } },
    ];
  }
}
