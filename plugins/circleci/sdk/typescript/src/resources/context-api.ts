import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  contextEnvironmentVariableRequestSchema,
  type ContextEnvironmentVariableRequest,
} from "../models/context-environment-variable-request.js";
import { contextListSchema, type ContextList } from "../models/context-list.js";
import { contextSchema, type Context } from "../models/context.js";
import { createContextRequestSchema, type CreateContextRequest } from "../models/create-context-request.js";
import {
  environmentVariableListSchema,
  type EnvironmentVariableList,
} from "../models/environment-variable-list.js";
import { environmentVariableSchema, type EnvironmentVariable } from "../models/environment-variable.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { messageResponseSchema, type MessageResponse } from "../models/message-response.js";
import { ownerTypeSchema, type OwnerType } from "../models/owner-type.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for managing contexts, which are used to secure and share environment variables across
 * projects.
 */
export class ContextApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add or update an environment variable
   *
   * @remarks
   * Creates a new environment variable or updates an existing one within the specified context.
   *
   * @returns Successfully added or updated environment variable
   *
   * @throws {@link ContextApi.AddOrUpdateContextEnvironmentVariableError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addOrUpdateContextEnvironmentVariable(
    request: ContextApi.AddOrUpdateContextEnvironmentVariableRequest,
    options?: RequestOptions,
  ): ApiPromise<EnvironmentVariable, ContextApi.AddOrUpdateContextEnvironmentVariableError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi(
          "/context/{context-id}/environment-variable/{env-var-name}",
        ),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "context-id", value: request.contextId, schema: s.string() },
          { name: "env-var-name", value: request.envVarName, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: contextEnvironmentVariableRequestSchema },
      },
      {
        success: { kind: "json", schema: environmentVariableSchema },
        errorFactory: ContextApi.AddOrUpdateContextEnvironmentVariableError,
      },
      options,
    );
  }

  /**
   * Create a context
   *
   * @remarks
   * Creates a new context for sharing environment variables across projects.
   *
   * @returns Successfully created context
   *
   * @throws {@link ContextApi.CreateContextError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createContext(
    request: ContextApi.CreateContextRequestParams,
    options?: RequestOptions,
  ): ApiPromise<Context, ContextApi.CreateContextError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi("/context"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createContextRequestSchema },
      },
      {
        success: { kind: "json", schema: contextSchema },
        errorFactory: ContextApi.CreateContextError,
      },
      options,
    );
  }

  /**
   * Delete a context
   *
   * @remarks
   * Deletes a context and all of its associated environment variables.
   *
   * @returns Successfully deleted context
   *
   * @throws {@link ContextApi.DeleteContextError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteContext(
    request: ContextApi.DeleteContextRequest,
    options?: RequestOptions,
  ): ApiPromise<MessageResponse, ContextApi.DeleteContextError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi("/context/{context-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "context-id", value: request.contextId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messageResponseSchema },
        errorFactory: ContextApi.DeleteContextError,
      },
      options,
    );
  }

  /**
   * Remove an environment variable
   *
   * @remarks
   * Deletes an environment variable from the specified context.
   *
   * @returns Successfully deleted environment variable
   *
   * @throws {@link ContextApi.DeleteContextEnvironmentVariableError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteContextEnvironmentVariable(
    request: ContextApi.DeleteContextEnvironmentVariableRequest,
    options?: RequestOptions,
  ): ApiPromise<MessageResponse, ContextApi.DeleteContextEnvironmentVariableError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi(
          "/context/{context-id}/environment-variable/{env-var-name}",
        ),
        auth: this.#auth.apiToken,
        pathParams: [
          { name: "context-id", value: request.contextId, schema: s.string() },
          { name: "env-var-name", value: request.envVarName, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messageResponseSchema },
        errorFactory: ContextApi.DeleteContextEnvironmentVariableError,
      },
      options,
    );
  }

  /**
   * Get a context
   *
   * @remarks
   * Returns a specific context by its unique identifier.
   *
   * @returns Successfully retrieved context
   *
   * @throws {@link ContextApi.GetContextError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getContext(
    request: ContextApi.GetContextRequest,
    options?: RequestOptions,
  ): ApiPromise<Context, ContextApi.GetContextError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi("/context/{context-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "context-id", value: request.contextId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contextSchema },
        errorFactory: ContextApi.GetContextError,
      },
      options,
    );
  }

  /**
   * List environment variables in a context
   *
   * @remarks
   * Returns a paginated list of environment variables associated with a specific context.
   *
   * @returns Successfully retrieved environment variables
   *
   * @throws {@link ContextApi.ListContextEnvironmentVariablesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listContextEnvironmentVariables(
    request: ContextApi.ListContextEnvironmentVariablesRequest,
    options?: RequestOptions,
  ): ApiPromise<EnvironmentVariableList, ContextApi.ListContextEnvironmentVariablesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi(
          "/context/{context-id}/environment-variable",
        ),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "context-id", value: request.contextId, schema: s.string() }],
        query: [{ name: "page-token", value: request.pageToken, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: environmentVariableListSchema },
        errorFactory: ContextApi.ListContextEnvironmentVariablesError,
      },
      options,
    );
  }

  /**
   * List contexts
   *
   * @remarks
   * Returns a paginated list of contexts for a given owner, which can be an organization or
   * account.
   *
   * @returns Successfully retrieved contexts
   *
   * @throws {@link ContextApi.ListContextsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CircleCiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listContexts(
    request: ContextApi.ListContextsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ContextList, ContextApi.ListContextsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultCircleCiRestApiV2ContextApi("/context"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [
          { name: "owner-id", value: request.ownerId, schema: s.optional(s.string()) },
          { name: "owner-slug", value: request.ownerSlug, schema: s.optional(s.string()) },
          { name: "owner-type", value: request.ownerType, schema: s.optional(s.lazy(() => ownerTypeSchema)) },
          { name: "page-token", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contextListSchema },
        errorFactory: ContextApi.ListContextsError,
      },
      options,
    );
  }
}

export namespace ContextApi {
  export type AddOrUpdateContextEnvironmentVariableRequest = {
    /** The unique identifier of the context */
    contextId: string;
    /** The name of the environment variable */
    envVarName: string;
    body: ContextEnvironmentVariableRequest;
  };

  export class AddOrUpdateContextEnvironmentVariableError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<AddOrUpdateContextEnvironmentVariableError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type CreateContextRequestParams = {
    body: CreateContextRequest;
  };

  export class CreateContextError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateContextError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteContextRequest = {
    /** The unique identifier of the context */
    contextId: string;
  };

  export class DeleteContextError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteContextError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DeleteContextEnvironmentVariableRequest = {
    /** The unique identifier of the context */
    contextId: string;
    /** The name of the environment variable */
    envVarName: string;
  };

  export class DeleteContextEnvironmentVariableError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteContextEnvironmentVariableError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetContextRequest = {
    /** The unique identifier of the context */
    contextId: string;
  };

  export class GetContextError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetContextError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListContextEnvironmentVariablesRequest = {
    /** The unique identifier of the context */
    contextId: string;
    /** Token for retrieving the next page of results */
    pageToken?: string;
  };

  export class ListContextEnvironmentVariablesError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListContextEnvironmentVariablesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ListContextsRequest = {
    /** The unique identifier of the owner */
    ownerId?: string;
    /** The slug for the owner */
    ownerSlug?: string;
    /** The type of the owner */
    ownerType?: OwnerType;
    /** Token for retrieving the next page of results */
    pageToken?: string;
  };

  export class ListContextsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ListContextsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
