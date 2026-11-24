import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { agentPoolSchema, type AgentPool } from "../models/agent-pool.js";
import { googleRpcErrorSchema, type GoogleRpcError } from "../models/google-rpc-error.js";
import {
  listAgentPoolsResponseSchema,
  type ListAgentPoolsResponse,
} from "../models/list-agent-pools-response.js";
import type { Servers } from "../servers.js";

export class Projects {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create agentPools
   *
   * @remarks
   * Creates an agent pool resource.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.StoragetransferProjectsAgentPoolsCreateError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudStorageTransferServiceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  storagetransferProjectsAgentPoolsCreate(
    request: Projects.StoragetransferProjectsAgentPoolsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentPool, Projects.StoragetransferProjectsAgentPoolsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/agentPools"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "projectsId", value: request.projectsId, schema: s.string() }],
        query: [{ name: "agentPoolId", value: request.agentPoolId, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: agentPoolSchema },
      },
      {
        success: { kind: "json", schema: agentPoolSchema },
        errorFactory: Projects.StoragetransferProjectsAgentPoolsCreateError,
      },
      options,
    );
  }

  /**
   * Delete agentPools
   *
   * @remarks
   * Deletes an agent pool.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.StoragetransferProjectsAgentPoolsDeleteError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudStorageTransferServiceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  storagetransferProjectsAgentPoolsDelete(
    request: Projects.StoragetransferProjectsAgentPoolsDeleteRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Projects.StoragetransferProjectsAgentPoolsDeleteError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/agentPools/{agentPoolsId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "agentPoolsId", value: request.agentPoolsId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Projects.StoragetransferProjectsAgentPoolsDeleteError,
      },
      options,
    );
  }

  /**
   * Get agentPools
   *
   * @remarks
   * Gets an agent pool.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.StoragetransferProjectsAgentPoolsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudStorageTransferServiceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  storagetransferProjectsAgentPoolsGet(
    request: Projects.StoragetransferProjectsAgentPoolsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentPool, Projects.StoragetransferProjectsAgentPoolsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/agentPools/{agentPoolsId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "agentPoolsId", value: request.agentPoolsId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: agentPoolSchema },
        errorFactory: Projects.StoragetransferProjectsAgentPoolsGetError,
      },
      options,
    );
  }

  /**
   * List agentPools
   *
   * @remarks
   * Lists agent pools.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.StoragetransferProjectsAgentPoolsListError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudStorageTransferServiceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  storagetransferProjectsAgentPoolsList(
    request: Projects.StoragetransferProjectsAgentPoolsListRequest,
    options?: RequestOptions,
  ): ApiPromise<ListAgentPoolsResponse, Projects.StoragetransferProjectsAgentPoolsListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/agentPools"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [{ name: "projectsId", value: request.projectsId, schema: s.string() }],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "pageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listAgentPoolsResponseSchema },
        errorFactory: Projects.StoragetransferProjectsAgentPoolsListError,
      },
      options,
    );
  }

  /**
   * Patch agentPools
   *
   * @remarks
   * Updates an existing agent pool resource.
   *
   * @returns Successful response
   *
   * @throws {@link Projects.StoragetransferProjectsAgentPoolsPatchError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GoogleCloudStorageTransferServiceError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  storagetransferProjectsAgentPoolsPatch(
    request: Projects.StoragetransferProjectsAgentPoolsPatchRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentPool, Projects.StoragetransferProjectsAgentPoolsPatchError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v1/projects/{projectsId}/agentPools/{agentPoolsId}"),
        auth: anyAuth(this.#auth.oauth2, this.#auth.apiKey),
        pathParams: [
          { name: "projectsId", value: request.projectsId, schema: s.string() },
          { name: "agentPoolsId", value: request.agentPoolsId, schema: s.string() },
        ],
        query: [{ name: "updateMask", value: request.updateMask, schema: s.optional(s.string()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: agentPoolSchema },
      },
      {
        success: { kind: "json", schema: agentPoolSchema },
        errorFactory: Projects.StoragetransferProjectsAgentPoolsPatchError,
      },
      options,
    );
  }
}

export namespace Projects {
  export type StoragetransferProjectsAgentPoolsCreateRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /**
     * Required. The ID of the agent pool to create. The `agent_pool_id` must meet the following
     * requirements: * Length of 128 characters or less. * Not start with the string `goog`. * Start
     * with a lowercase ASCII character, followed by: * Zero or more: lowercase Latin alphabet
     * characters, numerals, hyphens (`-`), periods (`.`), underscores (`_`), or tildes (`~`). * One
     * or more numerals or lowercase ASCII characters. As expressed by the regular expression:
     * `^(?!goog)[a-z]([a-z0-9-._~]*[a-z0-9])?$`.
     */
    agentPoolId?: string;
    body: AgentPool;
  };

  export class StoragetransferProjectsAgentPoolsCreateError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<StoragetransferProjectsAgentPoolsCreateError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type StoragetransferProjectsAgentPoolsDeleteRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (agentPoolsId). */
    agentPoolsId: string;
  };

  export class StoragetransferProjectsAgentPoolsDeleteError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<StoragetransferProjectsAgentPoolsDeleteError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type StoragetransferProjectsAgentPoolsGetRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (agentPoolsId). */
    agentPoolsId: string;
  };

  export class StoragetransferProjectsAgentPoolsGetError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<StoragetransferProjectsAgentPoolsGetError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type StoragetransferProjectsAgentPoolsListRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /**
     * An optional list of query parameters specified as JSON text in the form of:
     * `{"agentPoolNames":["agentpool1","agentpool2",...]}` Since `agentPoolNames` support multiple
     * values, its values must be specified with array notation. When the filter is either empty or
     * not provided, the list returns all agent pools for the project.
     */
    filter?: string;
    /** The list page size. The max allowed value is `256`. */
    pageSize?: number;
    /** The list page token. */
    pageToken?: string;
  };

  export class StoragetransferProjectsAgentPoolsListError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<StoragetransferProjectsAgentPoolsListError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }

  export type StoragetransferProjectsAgentPoolsPatchRequest = {
    /** Resource name segment (projectsId). */
    projectsId: string;
    /** Resource name segment (agentPoolsId). */
    agentPoolsId: string;
    /**
     * The [field mask]
     * (https://developers.google.com/protocol-buffers/docs/reference/google.protobuf) of the fields
     * in `agentPool` to update in this request. The following `agentPool` fields can be updated: *
     * display_name * bandwidth_limit
     */
    updateMask?: string;
    body: AgentPool;
  };

  export class StoragetransferProjectsAgentPoolsPatchError extends ApiError {
    declare readonly payload: Declared<"googleRpcError", GoogleRpcError> | Undeclared;

    static readonly errors: ErrorDecoders<StoragetransferProjectsAgentPoolsPatchError> = [
      { on: [400, 499], kind: "googleRpcError", decode: { kind: "json", schema: googleRpcErrorSchema } },
    ];
  }
}
